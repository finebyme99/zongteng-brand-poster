#!/usr/bin/env node

import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

function usage() {
  console.error("Usage: node scripts/export-html-poster.mjs <input.html> <output.png|output.pdf> --width <px> --height <px> [--pdf]");
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) usage();

const input = args[0];
const output = args[1];
let width = 1080;
let height = 1440;
let pdf = output.toLowerCase().endsWith(".pdf");

for (let i = 2; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--width") {
    width = Number(args[++i]);
  } else if (arg === "--height") {
    height = Number(args[++i]);
  } else if (arg === "--pdf") {
    pdf = true;
  } else {
    usage();
  }
}

if (!existsSync(input) || !Number.isFinite(width) || !Number.isFinite(height)) {
  usage();
}

const outDir = path.dirname(path.resolve(output));
mkdirSync(outDir, { recursive: true });

let chromium;
try {
  const require = createRequire(import.meta.url);
  const searchPaths = [process.cwd()];
  if (process.env.NODE_PATH) {
    searchPaths.push(...process.env.NODE_PATH.split(path.delimiter));
  }
  const resolved = require.resolve("playwright", { paths: searchPaths });
  const playwright = require(resolved);
  chromium = playwright.chromium ?? playwright.default?.chromium;
} catch (error) {
  console.error("Playwright is required. Install it with: npm install playwright && npx playwright install chromium");
  process.exit(2);
}

if (!chromium) {
  console.error("Playwright was found, but chromium could not be loaded.");
  process.exit(2);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 1
});

await page.goto(pathToFileURL(path.resolve(input)).href, { waitUntil: "networkidle" });

const poster = page.locator(".poster").first();
if (await poster.count()) {
  await poster.evaluate((element) => {
    element.scrollIntoView({ block: "start", inline: "start" });
  });
}

if (pdf) {
  await page.pdf({
    path: output,
    width: `${width}px`,
    height: `${height}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
} else if (await poster.count()) {
  await poster.screenshot({ path: output });
} else {
  await page.screenshot({ path: output, fullPage: false });
}

await browser.close();
console.log(`Exported ${output}`);
