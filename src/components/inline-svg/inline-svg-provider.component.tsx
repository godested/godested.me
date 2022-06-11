import { useLazyRef } from 'hooks';
import { createContext, useContext, useEffect } from 'react';
import { isBrowser, isEmpty, isNothing, isSomething, unwrap } from 'utils';

export const SPRITES_NODE_ID = '__svg-sprites';

export function getSpriteItemData(
  spriteItemUrl: string, // sprites.[hash].svg#icon-name
): Readonly<{ spriteUrl: string; id: string }> {
  const [spriteUrl, id] = spriteItemUrl.split('#');

  return {
    spriteUrl,
    id: `#${id}`,
  };
}

export class SvgSpriteInjector {
  private readonly registeredSprites: Map<string, Promise<SVGSVGElement>> =
    new Map();

  private _spritesNode: HTMLElement | null = null;

  private get spritesNode(): HTMLElement {
    if (isNothing(this._spritesNode) && isBrowser) {
      this._spritesNode = document.getElementById(SPRITES_NODE_ID);
    }
    return unwrap(this._spritesNode, 'SvgSpriteInjector#_spritesNode');
  }

  async registerSpriteItem(spriteItemUrl: string): Promise<void> {
    const { spriteUrl, id } = getSpriteItemData(spriteItemUrl);

    if (!this.registeredSprites.has(spriteUrl)) {
      const ssrNode = this.spritesNode.querySelector<SVGSVGElement>(
        `svg[data-src="${spriteUrl}"]`,
      );

      if (isSomething(ssrNode)) {
        this.registeredSprites.set(spriteUrl, Promise.resolve(ssrNode));
        return;
      }
      console.log(spriteUrl, ssrNode);

      this.registeredSprites.set(
        spriteUrl,
        fetch(spriteUrl)
          .then((res) => res.text())
          .then((text) => {
            this.spritesNode.innerHTML += text.replace(
              '<svg',
              `<svg data-src="${spriteUrl}" style="height: 0; width: 0"`,
            );
            return unwrap(
              this.spritesNode.querySelector(`svg[data-src="${spriteUrl}"]`),
              'SvgSpriteInjector#registration',
            );
          }),
      );
    }

    const spriteNode = unwrap(
      await this.registeredSprites.get(spriteUrl),
      'SvgSpriteInjector#usage',
    );

    // TODO:don't add used ids if it's already there

    spriteNode.dataset['usedIds'] = [spriteNode.dataset['usedIds'], `${id}`]
      .filter(isSomething)
      .join(',');
  }

  async unregisterSpriteItem(spriteItemUrl: string): Promise<void> {
    const { spriteUrl, id } = getSpriteItemData(spriteItemUrl);

    const spriteNode = unwrap(
      this.spritesNode.querySelector<SVGSVGElement>(
        `svg[data-src="${spriteUrl}"]`,
      ),
      'SvgSpriteInjector#unregisterSpriteItem',
    );
    const usedIds = unwrap(
      spriteNode.dataset['usedIds'],
      'SvgSpriteInjector#unregisterSpriteItem-usedIds',
    ).split(',');

    const newUsedIds = usedIds.filter((usedId) => usedId !== id);

    if (isEmpty(newUsedIds)) {
      this.spritesNode.removeChild(spriteNode);
      this.registeredSprites.delete(spriteUrl);
      return;
    }

    spriteNode.dataset['usedIds'] = newUsedIds.join(',');
  }
}

const InlineSvgContext = createContext<SvgSpriteInjector>(
  new SvgSpriteInjector(),
);

export function InlineSvgProvider({ children }: { children: React.ReactNode }) {
  const injector = useLazyRef(() => new SvgSpriteInjector());

  return (
    <InlineSvgContext.Provider value={injector}>
      {children}
    </InlineSvgContext.Provider>
  );
}

export function useInlineSvgSprite(
  url: string,
): ReturnType<typeof getSpriteItemData> {
  const injector = useContext(InlineSvgContext);

  useEffect(() => {
    injector.registerSpriteItem(url);

    return () => {
      injector.unregisterSpriteItem(url);
    };
  }, []);

  return getSpriteItemData(url);
}
