import { ReactElement } from 'react';
import { SVGDefs } from 'components/svg-defs';
import { PropsOf } from 'types';

export function CompanyIcon({
  url,
  title,
  ...props
}: Readonly<{ url: string; title: string }> & PropsOf<'svg'>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      {...props}
    >
      <title>{title}</title>
      <SVGDefs singleton id="IconShape">
        <clipPath id="icon-shape">
          <path
            fill="#000"
            d="M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"
          />
        </clipPath>
      </SVGDefs>
      <g clipPath="url(#icon-shape)">
        <rect x="0" y="0" width="200" height="100" fill="transparent" />
        <image href={url} height="100%" width="100%" />
      </g>
    </svg>
  );
}
