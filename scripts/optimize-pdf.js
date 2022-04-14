const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const pathUploads = './public/pdf/';
const pdfFiles = fs.readdirSync(pathUploads);

pdfFiles.forEach((file) => {
  if (path.extname(file).toLowerCase() === '.pdf') {
    const inputFile = path.resolve(`${pathUploads}/${path.basename(file)}`);
    const outputFile = path.resolve(
      `${pathUploads}/compressed/${path.basename(file)}`,
    );

    childProcess.exec(
      `node ./node_modules/.bin/gsx-pdf-optimize ${inputFile} ${outputFile} --preset=ebook --dpi=72`,
    );
  }
});
