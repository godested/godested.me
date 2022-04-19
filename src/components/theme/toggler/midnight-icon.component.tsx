import { ReactElement } from 'react';
import * as styles from './midnight-icon.module.scss';

export function MidnightIcon(): ReactElement {
  return (
    <svg
      viewBox="0 0 46 44"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.bulbIcon}
    >
      <g className={styles.bulbIconRays}>
        <path
          d="M8.3933 15.4242C9.33867 13.7868 8.77764 11.693 7.14023 10.7477C5.50281 9.80229 3.40905 10.3633 2.46369 12.0007C1.51832 13.6381 2.07934 15.7319 3.71676 16.6773C5.35418 17.6226 7.44794 17.0616 8.3933 15.4242Z"
          fill="currentColor"
        />
        <path
          d="M44.0402 12.0017C43.0948 10.3643 41.0011 9.80325 39.3637 10.7486C37.7262 11.694 37.1652 13.7877 38.1106 15.4252C39.056 17.0626 41.1497 17.6236 42.7871 16.6782C44.4246 15.7329 44.9856 13.6391 44.0402 12.0017Z"
          fill="currentColor"
        />
        <path
          d="M23.252 6.84693C25.1427 6.84693 26.6755 5.31419 26.6755 3.42347C26.6755 1.53274 25.1427 0 23.252 0C21.3613 0 19.8286 1.53274 19.8286 3.42347C19.8286 5.31419 21.3613 6.84693 23.252 6.84693Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M18.7512 41.5023C18.7512 42.2523 19.3514 43.0023 20.2515 43.0023H26.2526C27.1527 43.0023 27.7528 42.2523 27.7528 41.5023V40.0023H18.7512V41.5023ZM23.252 13.0023C17.401 13.0023 12.7502 17.6523 12.7502 23.5023C12.7502 27.1023 14.5505 30.2523 17.251 32.0523V35.5023C17.251 36.2523 17.8511 37.0023 18.7512 37.0023H27.7528C28.653 37.0023 29.2531 36.2523 29.2531 35.5023V32.0523C31.9536 30.1023 33.7539 26.9523 33.7539 23.5023C33.7539 17.6523 29.1031 13.0023 23.252 13.0023Z"
        className={styles.bulbIconCore}
        fill="currentColor"
      />
    </svg>
  );
}
