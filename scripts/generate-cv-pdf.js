const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

const normalizePageName = (pagePath = '') => {
  const normalizedFront = pagePath.startsWith('/')
    ? pagePath.slice(1)
    : pagePath;
  const normalizedEnd = normalizedFront.endsWith('/')
    ? normalizedFront.slice(0, -1)
    : normalizedFront;

  const pageName =
    normalizedEnd === '' ? 'index' : normalizedEnd.replace(/\//g, '-');

  return pageName;
};

const convertPixelToInches = (value, dpi) => {
  return `${value / dpi}in`;
};

const base64Encode = async (filepath) => {
  return fs.readFile(filepath, { encoding: 'base64' });
};

async function prepareHTML(input) {
  const currentDir = process.cwd();
  let html = input.replace(/loading="lazy"/g, '');

  // images

  const imagesMatches = html.match(/\/static\/([\w|\S]+)\.(png|webp)/g);

  // eslint-disable-next-line no-restricted-syntax
  for (const pathToAsset of imagesMatches) {
    html = html.replace(
      pathToAsset,
      `data:image/${path
        .extname(pathToAsset)
        // eslint-disable-next-line no-await-in-loop
        .replace('.', '')};base64;charset=utf-8,${await base64Encode(
        path.join(currentDir, 'public', pathToAsset),
      )}`,
    );
  }

  const stylesMatches = html.match(/href=".+?\.css"/g);

  // styles

  // eslint-disable-next-line no-restricted-syntax
  for (const styleMatch of [...stylesMatches].reverse()) {
    const cssPath = styleMatch.replace('href="', '').replace('"', '');

    html = html.replace(
      '<head>',
      // eslint-disable-next-line no-await-in-loop
      `<head><style>${await fs.readFile(
        path.join(currentDir, 'public', cssPath),
        'utf8',
      )}</style>`,
    );
  }

  return html;
}

const generatePdf = async ({ pagePath }) => {
  const currentDir = process.cwd();
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const htmlPath = path.join(currentDir, 'public', pagePath, 'index.html');
  const downloadDir = path.join(currentDir, 'public');

  const contentHtml = await prepareHTML(await fs.readFile(htmlPath, 'utf8'));

  await page.setJavaScriptEnabled(false);
  await page.setContent(contentHtml, {
    waitUntil: 'networkidle0',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  await page.setJavaScriptEnabled(true);
  await page.evaluateHandle('document.fonts.ready');
  await page.addStyleTag({
    content: `
    html { font-size:${convertPixelToInches(16, 72)};}
    * { transition: none !important; }
  `,
  });
  await page.setJavaScriptEnabled(false);

  const width = 1188;
  const height = width * Math.sqrt(2);

  await page.pdf({
    printBackground: true,
    width: convertPixelToInches(width, 72),
    height: convertPixelToInches(height, 72),
    path: path.join(downloadDir, `${normalizePageName(pagePath)}.pdf`),
  });

  browser.close();
};

async function generateCvPDFs() {
  await Promise.all(
    (
      await fs.readdir(path.join(process.cwd(), 'public'))
    )
      .filter(
        (filename) =>
          filename === path.basename(filename, path.extname(filename)),
      )
      .filter((filename) => /^cv-\w/.test(filename))
      .map((pagePath) => {
        return generatePdf({ pagePath });
      }),
  );
}

generateCvPDFs();
