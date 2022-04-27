import 'normalize.css';
import './src/styles/global.scss';
import './src/styles/fonts.scss';
import './src/components/typography/typography.module.scss';

function applyPassiveOption(options?: boolean | AddEventListenerOptions) {
  return typeof options === 'boolean'
    ? { capture: options, passive: true }
    : { ...options, passive: true };
}

function patchScrollListeners() {
  const { addEventListener } = window;

  window.addEventListener = function patchedAddEventListener<T>(
    this: T,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void {
    addEventListener.call(
      this,
      type,
      listener,
      type === 'scroll' ? applyPassiveOption(options) : options,
    );
  };
}

patchScrollListeners();
