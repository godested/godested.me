import { ReactElement } from 'react';
import { WithOptionalClassNameProps } from 'common/types';
import classNames from 'classnames';
import { isSomething } from 'common/utils';
import { useTheme, useChangeTheme } from '../theme-provider.provider';
import { Theme } from '../types';
import { SunIcon } from './sun-icon.component';
import { MoonIcon } from './moon-icon.component';
import * as styles from './theme-toggler.module.scss';

export type ThemeTogglerProps = Readonly<{ invertColors?: true }> &
  WithOptionalClassNameProps;

export function ThemeToggler({
  className,
  invertColors,
}: ThemeTogglerProps): ReactElement {
  const theme = useTheme();
  const changeTheme = useChangeTheme();

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
      {isSomething(window) &&
        (theme === Theme.Light ? <MoonIcon /> : <SunIcon />)}
    </button>
  );
}
