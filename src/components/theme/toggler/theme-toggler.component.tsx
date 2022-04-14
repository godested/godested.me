import { FC, ReactElement } from 'react';
import { WithOptionalClassNameProps } from 'types';
import classNames from 'classnames';
import { assertNever, isBrowser } from 'utils';
import { useTheme, useChangeTheme } from '../theme-provider.provider';
import { SunIcon } from './sun-icon.component';
import { MidnightIcon } from './midnight-icon.component';
import { MoonIcon } from './moon-icon.component';
import { Theme } from '../types';
import * as styles from './theme-toggler.module.scss';

export type ThemeTogglerProps = Readonly<{ invertColors?: true }> &
  WithOptionalClassNameProps;

export function ThemeToggler({
  className,
  invertColors,
}: ThemeTogglerProps): ReactElement | null {
  const activeTheme = useTheme();
  const changeTheme = useChangeTheme();

  if (!isBrowser) {
    return null;
  }

  const Icon = resolveIcon(activeTheme);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        changeTheme(resolveNextTheme(activeTheme));
      }}
      className={classNames(
        styles.themeToggler,
        { [styles.themeTogglerInverted]: invertColors },
        className,
      )}
    >
      <Icon />
    </button>
  );
}

function resolveIcon(theme: Theme): FC {
  switch (theme) {
    case Theme.Light:
      return MidnightIcon;
    case Theme.Midnight:
      return MoonIcon;
    case Theme.Dark:
      return SunIcon;
    default:
      return assertNever(theme);
  }
}

function resolveNextTheme(theme: Theme): Theme {
  switch (theme) {
    case Theme.Light:
      return Theme.Midnight;
    case Theme.Midnight:
      return Theme.Dark;
    case Theme.Dark:
      return Theme.Light;
    default:
      return assertNever(theme);
  }
}
