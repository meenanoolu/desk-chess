/**
 * Desk Chess XR — Automated 45–60 Second IWSDK / Playwright Emulator Trailer Recorder
 * Inspired by Felix's live build workflow (https://www.youtube.com/watch?v=D04z9PYUSao&t=2139s)
 * for the Meta VR Start Developer Competition 2026 (https://start-developer-competition-26.devpost.com/).
 *
 * Usage:
 *   1. Start the local dev server:
 *        npx vite --port 8081
 *   2. Run this automated trailer director & video recorder:
 *        node record-trailer.js
 *
 * Output:
 *   Saves a 1920x1080 60fps gameplay trailer with natural head/camera bobbing,
 *   two-palm surface calibration, gaze-and-pinch moves, direct hand grasping,
 *   3D shatter capture explosions, and Legal's Mate checkmate to ./trailer-output/
 */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const APP_URL = process.env.APP_URL || 'http://localhost:8081';
const OUTPUT_DIR = path.resolve(process.cwd(), 'trailer-output');
const DURATION_MS = 49000; // 49-second choreographed trailer

async function recordDeskChessTrailer() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🎬 Launching Playwright Chromium with WebXR Emulation & Video Recording...');
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--ignore-certificate-errors',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--use-gl=angle'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: OUTPUT_DIR,
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();
  console.log(`🌐 Loading Desk Chess XR at ${APP_URL}...`);
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  // Trigger the built-in 48-second camera-bobbing + gaze/hand choreography director
  console.log('🖐️🖐️ Starting Two-Palm Surface Calibration & Gaze + Hands Match Choreography...');
  await page.evaluate(() => {
    if (typeof window.__startTrailerDirector === 'function') {
      window.__startTrailerDirector();
    } else {
      const btn = document.getElementById('btn-trailer');
      if (btn) btn.click();
    }
  });

  // Also drive organic cursor/gaze sweep so the 2D/3D gaze reticle tracks natural human eye motion
  const startTime = Date.now();
  while (Date.now() - startTime < DURATION_MS) {
    const t = (Date.now() - startTime) / 1000;
    const gazeX = Math.round(960 + Math.sin(t * 1.35) * 290 + Math.cos(t * 2.8) * 65);
    const gazeY = Math.round(540 + Math.cos(t * 1.1) * 180 + Math.sin(t * 3.1) * 40);
    await page.mouse.move(gazeX, gazeY, { steps: 4 });

    // Switch to AR Office Desk passthrough midway for mixed-reality showcase
    if (Math.abs(t - 24.0) < 0.25) {
      await page.evaluate(() => {
        const arBtn = document.getElementById('btn-passthrough');
        if (arBtn && !document.body.classList.contains('passthrough-active')) {
          arBtn.click();
        }
      });
    }
    await page.waitForTimeout(120);
  }

  const videoPath = await page.video().path();
  await context.close();
  await browser.close();

  console.log(`✅ Trailer recording complete! Saved to: ${videoPath}`);
  console.log('💡 Tip: Upload directly to YouTube or Vimeo (<3 mins) for your Devpost submission.');
}

recordDeskChessTrailer().catch((err) => {
  console.error('❌ Trailer recording failed:', err);
  process.exit(1);
});
