import { PropsWithChildren, ReactElement } from 'react';
import 'components/typography';
import { ThemeProvider } from 'components/theme';
import { InlineSvgProvider } from 'components/inline-svg';

// eslint-disable-next-line @typescript-eslint/ban-types
export function AppWrapper({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <ThemeProvider>
      <InlineSvgProvider>{children}</InlineSvgProvider>
    </ThemeProvider>
  );
}
