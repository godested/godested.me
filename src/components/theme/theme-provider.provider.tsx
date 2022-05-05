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
import {
  assertNever,
  createUseContext,
  isBrowser,
  isSomething,
  noop,
} from 'utils';
import { CSSClassName } from 'styles';
import classNames from 'classnames';
import { RootClassName } from 'components/root-classname';
import { fromEvent } from 'rxjs';
import { useDisposable } from 'hooks';
import { Theme } from './types';
import * as styles from './theme-provider.module.scss';

const ThemeContext = createContext<Theme>(Theme.Light);
const ChangeThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(noop);

// eslint-disable-next-line @typescript-eslint/ban-types
type ThemeProviderProps = Readonly<PropsWithChildren<{}>>;

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState(resolveTheme());
  const [changingClassName, setChangingClassName] = useState<CSSClassName>();

  useEffect(() => saveTheme(theme), [theme]);
  useDisposable({
    onEffect: ({ addDisposable }) =>
      addDisposable(
        fromEvent<MediaQueryListEvent>(
          window.matchMedia('(prefers-color-scheme: dark)'),
          'change',
          { passive: true },
        ).subscribe(({ matches }) => {
          setTheme(matches ? Theme.Dark : Theme.Light);
        }),
      ),
  });

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

  return (
    <RootClassName
      className={classNames(
        resolveBodyClassNameFromTheme(theme),
        changingClassName,
      )}
    >
      <ThemeContext.Provider value={theme}>
        <ChangeThemeContext.Provider value={changeTheme}>
          {children}
        </ChangeThemeContext.Provider>
      </ThemeContext.Provider>
    </RootClassName>
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
  return isBrowser
    ? loadTheme() ?? resolveThemeFromDeviceSettings() ?? defaultTheme
    : defaultTheme;
}

function resolveBodyClassNameFromTheme(theme: Theme): CSSClassName {
  switch (theme) {
    case Theme.Light:
      return styles.themeLight;
    case Theme.Dark:
      return styles.themeDark;
    case Theme.Midnight:
      return styles.themeMidnight;
    default:
      return assertNever(theme);
  }
}

function saveTheme(theme: Theme): void {
  window.localStorage.setItem('theme', String(theme));
}

function loadTheme(): Theme | undefined {
  const theme = window.localStorage.getItem('theme');
  return isSomething(theme) ? parseInt(theme, 10) : undefined;
}

function resolveThemeFromDeviceSettings(): Theme | undefined {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark;
  }

  return undefined;
}

export const getLoadScript = (): string => `
(function() {
  var storedTheme
  try {
    storedTheme = window.localStorage.getItem('theme');
  } catch (e) {
  }
  var theme = storedTheme
    ? parseInt(storedTheme, 10)
    : window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : ${Theme.Light};
  var themeClass = theme === ${Theme.Dark}
    ? '${styles.themeDark}'
    : theme === ${Theme.Midnight}
      ? '${styles.themeMidnight}'
      : '${styles.themeLight}';
  document.body.classList.remove('${styles.themeLight}', '${styles.themeDark}', '${styles.themeMidnight}');
  document.body.classList.add(themeClass);
})()
`;
