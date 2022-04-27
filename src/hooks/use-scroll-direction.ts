import { useRef, useState } from 'react';
import { animationFrameScheduler, fromEvent, observeOn } from 'rxjs';
import { useDisposable } from 'hooks';

export enum ScrollDirection {
  Up = 'up',
  Down = 'down',
}

export type ScrollDirectionOptions = Readonly<{
  threshold?: number;
}>;

export function useScrollDirection({
  threshold = 0,
}: ScrollDirectionOptions = {}): ScrollDirection | undefined {
  const lastScrollTop = useRef<number>();
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();

  useDisposable({
    onEffect: ({ addDisposable }) =>
      addDisposable(
        fromEvent(window, 'scroll', { passive: true })
          .pipe(observeOn(animationFrameScheduler))
          .subscribe(() => {
            const scrollTop = getNormalizedScrollValue(
              document.documentElement,
            );

            if (
              Math.abs(scrollTop - (lastScrollTop.current ?? 0)) <= threshold
            ) {
              return;
            }

            setScrollDirection(
              scrollTop !== 0 && scrollTop >= (lastScrollTop.current ?? 0)
                ? ScrollDirection.Down
                : ScrollDirection.Up,
            );

            lastScrollTop.current = scrollTop;
          }),
      ),
  });

  return scrollDirection;
}

function getNormalizedScrollValue(element: HTMLElement): number {
  const { scrollTop, scrollHeight, clientHeight } = element;

  // Omit outscrolled values in safari
  return Math.min(
    Math.max(Math.floor(scrollTop), 0),
    scrollHeight - clientHeight,
  );
}
