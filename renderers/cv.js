/* eslint-disable global-require */
const path = require('path');

exports.renderer = (createPage) => {
  const cv = require('../data/cv.json');

  createPage({
    path: '/cv',
    component: path.resolve('src/templates/cv/index.tsx'),
    context: {
      cv,
      avatarCloudinaryID: cv.profile.avatarCloudinaryID,
    },
  });
};
