import { useEffect } from 'react';
import { CSSClassName } from 'common/styles';
import { isSomething } from 'common/utils';

export function useBodyClasses(
  ...classes: readonly (CSSClassName | undefined)[]
) {
  useEffect(() => {
    const validClasses = [...classes].filter(isSomething);
    document.body.classList.add(...validClasses);

    return () => document.body.classList.remove(...validClasses);
  }, [...classes]);
}
