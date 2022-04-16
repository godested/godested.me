/* eslint-disable global-require */
const path = require('path');
const fs = require('fs-extra');

const cvDataFolder = 'data/cv';

async function renderCVPage({ graphql, actions: { createPage } }, filePath) {
  const ext = path.extname(filePath);

  if (ext !== '.json') {
    console.warn('Unexpected file extension:', filePath);
    return;
  }

  const cvData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const result = await graphql(
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

  const avatar = result.data.allCloudinaryAsset.edges[0].node.fluid;

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

exports.renderer = async (actions) => {
  const currentDir = process.cwd();
  const folderPath = path.join(currentDir, cvDataFolder);

  await Promise.all(
    fs
      .readdirSync(folderPath)
      .map((filename) =>
        renderCVPage(actions, path.join(folderPath, filename)),
      ),
  );
};
