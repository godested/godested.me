import { unique } from 'utils';
import { readFile } from 'fs/promises';
import path from 'path';
import { getSpriteItemData } from './inline-svg-provider.component';

export async function getStringifiedSprites(body: string): Promise<string> {
  const spriteItemsMatch = body.match(/data-sprite-url="(.*?)"/g);

  if (!spriteItemsMatch) {
    return '';
  }

  const spriteItems = unique(
    spriteItemsMatch.map((item) =>
      item.replace('data-sprite-url="', '').replace('"', ''),
    ),
  );

  const spritesMap: Record<string, readonly string[]> = spriteItems
    .map((item) => getSpriteItemData(item))
    .reduce<Record<string, readonly string[]>>(
      (acc, { spriteUrl, id }) => ({
        ...acc,
        [spriteUrl]: [...(acc[spriteUrl] ?? []), id],
      }),
      {},
    );

  const sprites = await Promise.all(
    Object.keys(spritesMap).map(async (spriteUrl) => {
      const spriteIds = spritesMap[spriteUrl].join(',');
      const spritePath = path.join(process.env['PUBLIC_DIR'] ?? '', spriteUrl);

      return (await readFile(spritePath, 'utf8')).replace(
        '<svg',
        `<svg data-usedIds="${spriteIds}" data-src="${spriteUrl}" style="height: 0; width: 0; overflow: hidden;">`,
      );
    }),
  );
  return sprites.join('\n');
}
