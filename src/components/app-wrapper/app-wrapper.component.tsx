import { ThemeProvider } from 'components/theme';
import { PropsWithChildren, ReactElement } from 'react';
import 'components/typography';

// eslint-disable-next-line @typescript-eslint/ban-types
export function AppWrapper({ children }: PropsWithChildren<{}>): ReactElement {
  return <ThemeProvider>{children}</ThemeProvider>;
}
