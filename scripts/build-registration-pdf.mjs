/**
 * Renders the blank patient registration form to
 * public/forms/patient-registration-form.pdf.
 *
 *   npm run build && npm run start     (in one terminal)
 *   npm run pdf:registration           (in another)
 *
 * Re-run whenever the form, the SMS wording (lib/sms.ts) or the
 * practice contact details in lib/site.ts change — the PDF is a snapshot of the page.
 *
 * Set BASE_URL if the server is not on localhost:3000, and CHROME_PATH if
 * Chrome/Edge lives somewhere unusual.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(root, "public", "forms", "patient-registration-form.pdf");
const url = `${process.env.BASE_URL ?? "http://localhost:3000"}/patient-registration`;

const chrome = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
]
  .filter(Boolean)
  .find((p) => existsSync(p));

if (!chrome) {
  console.error("No Chrome or Edge binary found. Set CHROME_PATH and re-run.");
  process.exit(1);
}

// Chrome writes a PDF even when the page fails to load, which would silently
// replace the real form with an error page. Check the page first.
try {
  const res = await fetch(url);
  const html = await res.text();
  if (!res.ok || !html.includes("reg-sms-consent")) {
    throw new Error(`got HTTP ${res.status}, but not the registration form`);
  }
} catch (err) {
  console.error(
    `\nCould not load the registration form at ${url}\n  (${err.message})\n\n` +
      "Start THIS project's server first, in another terminal:\n" +
      "  npm run build\n  npm run start\n\n" +
      "If it runs on a different port, pass it, e.g.:\n" +
      "  set BASE_URL=http://localhost:3001 && npm run pdf:registration\n\n" +
      "The existing PDF was left unchanged.\n",
  );
  process.exit(1);
}

mkdirSync(dirname(OUTPUT), { recursive: true });

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--user-data-dir=${mkdtempSync(join(tmpdir(), "mpc-reg-"))}`,
    `--print-to-pdf=${OUTPUT}`,
    url,
  ],
  { stdio: "inherit" },
);

console.log(`Wrote ${OUTPUT}`);
