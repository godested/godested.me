import { assertNever } from 'utils';

export enum Theme {
  Light,
  Midnight,
  Dark,
}

export namespace Theme {
  export function toLabel(theme: Theme): string {
    switch (theme) {
      case Theme.Light:
        return 'Light';
      case Theme.Dark:
        return 'Dark';
      case Theme.Midnight:
        return 'Midnight';
      default:
        return assertNever(theme);
    }
  }
}
