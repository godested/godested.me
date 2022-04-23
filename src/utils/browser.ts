export const isBrowser = typeof window !== 'undefined';

export const isSafari = (): boolean =>
  isBrowser &&
  navigator.userAgent.includes('Safari') &&
  !navigator.userAgent.includes('Chrome');
