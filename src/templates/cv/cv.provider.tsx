import { createUseContext } from 'common/utils';
import { createContext, PropsWithChildren, ReactElement } from 'react';
import { CV } from './types';

export const CVContext = createContext<CV | undefined>(undefined);

type CVProviderProps = Readonly<PropsWithChildren<{ cv: CV }>>;

export function CVProvider({ children, cv }: CVProviderProps): ReactElement {
  return <CVContext.Provider value={cv}>{children}</CVContext.Provider>;
}

export const useCV = createUseContext(CVContext);
