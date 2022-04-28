import {
  ReactElement,
  createContext,
  useContext,
  PropsWithChildren,
} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { CSSClassName } from 'styles';
import { WithAdditionalClassNameProps } from 'types';

const RootClassNameContext = createContext<CSSClassName | undefined>(undefined);

export function RootClassName({
  className,
  children,
}: PropsWithChildren<WithAdditionalClassNameProps>): ReactElement {
  const previousClassName = useContext(RootClassNameContext);

  const fullClassName = classNames(previousClassName, className);

  return (
    <RootClassNameContext.Provider value={fullClassName}>
      <Helmet>
        <body className={fullClassName} />
      </Helmet>
      {children}
    </RootClassNameContext.Provider>
  );
}
