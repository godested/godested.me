import { GatsbyBrowser } from 'gatsby';
// important styles ordering
import 'normalize.css';
import 'styles/global.scss';
import { AppWrapper } from 'components/app-wrapper';

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

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <AppWrapper>{element}</AppWrapper>;
};
