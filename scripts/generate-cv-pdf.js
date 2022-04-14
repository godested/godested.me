const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

const paths = ['/cv'];

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

const generatePdf = async ({ pagePath }) => {
  const currentDir = process.cwd();
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const htmlPath = path.join(currentDir, 'public', pagePath, 'index.html');
  const downloadDir = path.join(currentDir, 'public/pdf');

  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  const contentHtml = fs
    .readFileSync(htmlPath, 'utf8')
    .replace(/\/static/g, path.join(currentDir, 'public', 'static'));

  await page.setJavaScriptEnabled(false);
  await page.setContent(contentHtml, {
    waitUntil: 'networkidle0',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  await page.setJavaScriptEnabled(true);
  await page.evaluateHandle('document.fonts.ready');
  await page.addStyleTag({
    content: `html { font-size:${convertPixelToInches(16, 72)} }`,
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
    paths.map((pagePath) => {
      return generatePdf({ pagePath });
    }),
  );
}

// DELETE!
generateCvPDFs();
