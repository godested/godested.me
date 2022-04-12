import {
  ReactElement,
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  ContextType,
  useEffect,
} from 'react';
import { assertNever, createUseContext, isSomething, noop } from 'common/utils';
import { CSSClassName } from 'common/styles';
import { useBodyClasses } from 'common/hooks';
import { Theme } from './types';
import * as styles from './theme-provider.module.scss';

// TODO: saved-color -> preferred -> default
const ThemeContext = createContext<Theme>(Theme.Light);
const ChangeThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(noop);

type ThemeProviderProps = Readonly<PropsWithChildren<{ defaultTheme?: Theme }>>;

export function ThemeProvider({
  children,
  defaultTheme,
}: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState(resolveTheme(defaultTheme));
  const [changingClassName, setChangingClassName] = useState<
    CSSClassName | undefined
  >(undefined);

  useEffect(() => saveTheme(theme), [theme]);
  useEffect(() => {
    const unsubscribe = listenPreferredTheme((preferredTheme) => {
      setTheme(preferredTheme);
    });

    return () => unsubscribe();
  }, []);

  const changeTheme = useCallback<ContextType<typeof ChangeThemeContext>>(
    (newTheme) => {
      setChangingClassName(styles.themeChanging);
      setTheme(newTheme);
      setTimeout(
        () => setChangingClassName(undefined),
        parseInt(styles.themeChangingDuration, 10),
      );
    },
    [setTheme, setChangingClassName],
  );

  useBodyClasses(resolveBodyClassNameFromTheme(theme), changingClassName);

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeThemeContext.Provider value={changeTheme}>
        {children}
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export const useTheme = createUseContext(ThemeContext);
export const useChangeTheme = createUseContext(ChangeThemeContext);

export function useThemedClassName(
  classNamesMap: Record<Theme, CSSClassName>,
): CSSClassName {
  const theme = useTheme();
  return classNamesMap[theme];
}

function resolveTheme(defaultTheme: Theme = Theme.Light): Theme {
  return loadTheme() ?? resolveThemeFromDeviceSettings() ?? defaultTheme;
}

function resolveBodyClassNameFromTheme(theme: Theme): CSSClassName {
  switch (theme) {
    case Theme.Light:
      return styles.themeLight;
    case Theme.Dark:
      return styles.themeDark;
    default:
      return assertNever(theme);
  }
}

function saveTheme(theme: Theme): void {
  window.localStorage.setItem('theme', String(theme));
}

function loadTheme(): Theme | undefined {
  const theme = window.localStorage.getItem('theme');
  return isSomething(theme) ? (parseInt(theme, 10) as Theme) : undefined;
}

function resolveThemeFromDeviceSettings(): Theme | undefined {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark;
  }

  return undefined;
}

function listenPreferredTheme(callback: (theme: Theme) => void): () => void {
  const listener = (event: MediaQueryListEvent) => {
    callback(event.matches ? Theme.Dark : Theme.Light);
  };

  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

  matchMedia.addEventListener('change', listener);

  return () => matchMedia.removeEventListener('change', listener);
}
