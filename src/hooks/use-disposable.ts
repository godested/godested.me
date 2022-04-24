import { useEffect } from 'react';
import { Disposable, isObject } from 'utils';
import { useLazyRef } from './use-lazy-ref';

type DisposableCallback = (disposable: Omit<Disposable, 'dispose'>) => void;

type DisposableConfig =
  | DisposableCallback
  | Readonly<{ onEffect: DisposableCallback }>;

export function useDisposable(callback?: DisposableConfig): Disposable {
  const disposable = useLazyRef<Disposable>(() => {
    const innerDisposable = new Disposable();
    if (typeof callback === 'function') {
      callback(innerDisposable);
    }
    return innerDisposable;
  });

  useEffect(() => {
    if (isObject(callback)) {
      const { onEffect } = callback;
      onEffect(disposable);
    }

    return () => disposable.dispose();
  }, []);

  return disposable;
}
