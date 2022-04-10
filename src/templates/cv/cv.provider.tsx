import { unwrap } from 'common/utils';
import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import { CV } from './types';

export const CVContext = createContext<CV | undefined>(undefined);

type CVProviderProps = Readonly<PropsWithChildren<{ cv: CV }>>;

export function CVProvider({ children, cv }: CVProviderProps): ReactElement {
  return <CVContext.Provider value={cv}>{children}</CVContext.Provider>;
}

export function useCV(): CV {
  const cv = useContext(CVContext);

  return unwrap(cv, 'useCV must be used within CVProvider');
}
