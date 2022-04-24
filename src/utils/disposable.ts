type DisposableItem =
  | Disposable
  | { unsubscribe: () => unknown }
  | (() => unknown);

export class Disposable {
  static create(...disposables: readonly DisposableItem[]) {
    const disposable = new Disposable();
    disposables.forEach((disposableItem) =>
      disposable.addDisposable(disposableItem),
    );
    return disposable;
  }

  private readonly _disposables: DisposableItem[] = [];

  private _isDisposed = false;

  readonly addDisposable = <T extends DisposableItem>(disposable: T): T => {
    this._disposables.push(disposable);
    return disposable;
  };

  readonly dispose = (): void => {
    if (this._isDisposed) {
      // eslint-disable-next-line no-console
      console.error('Already disposed');
      return;
    }

    this._disposables.forEach((dispose) => {
      if (typeof dispose === 'function') {
        dispose();
        return;
      }

      if ('unsubscribe' in dispose) {
        dispose.unsubscribe();
        return;
      }

      dispose.dispose();
    });
    this._isDisposed = true;
  };
}
