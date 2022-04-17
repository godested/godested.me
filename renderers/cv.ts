import path from 'path';
import fs from 'fs-extra';
import { Actions, CreatePagesArgs, GatsbyNode } from 'gatsby';

const cvDataFolder = 'data/cv';

async function renderCVPage(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  filePath: string,
) {
  const ext = path.extname(filePath);

  if (ext !== '.json') {
    console.warn('Unexpected file extension:', filePath);
    return;
  }

  const cvData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const result = await graphql<{
    allCloudinaryAsset: { edges: Array<{ node: { fluid: string } }> };
  }>(
    `
      query Avatar($avatarCloudinaryID: String) {
        allCloudinaryAsset(filter: { id: { eq: $avatarCloudinaryID } }) {
          edges {
            node {
              fluid {
                aspectRatio
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    `,
    { avatarCloudinaryID: cvData.profile.avatarCloudinaryID },
  );

  const avatar = result.data?.allCloudinaryAsset.edges[0].node.fluid;

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
        profile: { ...cvData.profile, avatar },
        pdfURL: `${pagePath}.pdf`,
      },
    },
  });
}

export const rendererCV: NonNullable<GatsbyNode['createPages']> = async ({
  graphql,
  actions,
}) => {
  const currentDir = process.cwd();
  const folderPath = path.join(currentDir, cvDataFolder);

  await Promise.all(
    fs
      .readdirSync(folderPath)
      .map((filename) =>
        renderCVPage(
          graphql,
          actions.createPage,
          path.join(folderPath, filename),
        ),
      ),
  );
};
