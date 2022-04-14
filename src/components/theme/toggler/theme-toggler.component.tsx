import { ReactElement } from 'react';
import { WithOptionalClassNameProps } from 'types';
import classNames from 'classnames';
import { isBrowser } from 'utils';
import { useTheme, useChangeTheme } from '../theme-provider.provider';
import { SunIcon } from './sun-icon.component';
import { MoonIcon } from './moon-icon.component';
import { Theme } from '../types';
import * as styles from './theme-toggler.module.scss';

export type ThemeTogglerProps = Readonly<{ invertColors?: true }> &
  WithOptionalClassNameProps;

export function ThemeToggler({
  className,
  invertColors,
}: ThemeTogglerProps): ReactElement | null {
  const theme = useTheme();
  const changeTheme = useChangeTheme();

  if (!isBrowser) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        changeTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
      }}
      className={classNames(
        styles.themeToggler,
        { [styles.themeTogglerInverted]: invertColors },
        className,
      )}
    >
      {theme === Theme.Light ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
