// This file holds ambient type declarations.
/// <reference types="react" />

interface SVGSource {
  readonly viewBox: string;
  readonly url: string;
}

declare module '*.svg' {
  const _: SVGSource;
  export default _;
}
