/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import fs from 'fs-extra';
import yaml from 'js-yaml';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { CreatePagesArgs, GatsbyNode } from 'gatsby';

const cvDataFolder = 'data/cv';

async function renderCVPage(
  {
    actions: { createPage, createNode },
    store,
    cache,
    createContentDigest,
    reporter,
    graphql,
  }: CreatePagesArgs,
  filePath: string,
) {
  const ext = path.extname(filePath);

  if (ext !== '.yml') {
    console.warn('Unexpected file extension:', filePath);
    return;
  }

  const cvData = yaml.load(fs.readFileSync(filePath, 'utf8')) as any;

  const { children } = await createRemoteFileNode({
    url: cvData.profile.avatarURL,
    store,
    cache,
    createNode,
    createNodeId: createContentDigest,
    reporter,
  });

  const { data } = await graphql<{ avatar: { gatsbyImageData: any } }>(
    `
      query Avatar($id: String!) {
        avatar: imageSharp(id: { eq: $id }) {
          gatsbyImageData(width: 512, placeholder: TRACED_SVG)
        }
      }
    `,
    { id: children[0] },
  );

  const pagePath = `/cv-${cvData.profile.name
    .replace(/\s/g, '-')
    .toLowerCase()}`;

  await createPage({
    path: pagePath,
    component: path.resolve(
      `src/templates/${cvData.meta.template || 'cv-regular'}/index.tsx`,
    ),
    context: {
      cv: {
        ...cvData,
        profile: { ...cvData.profile, avatar: data?.avatar },
        pdfURL: `${pagePath}.pdf`,
      },
    },
  });
}

export const rendererCV: NonNullable<GatsbyNode['createPages']> = async (
  args,
) => {
  const currentDir = process.cwd();
  const folderPath = path.join(currentDir, cvDataFolder);

  await Promise.all(
    fs
      .readdirSync(folderPath)
      .map((filename) => renderCVPage(args, path.join(folderPath, filename))),
  );
};
