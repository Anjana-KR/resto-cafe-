import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const framesDir = path.resolve('public', 'frames');
if (!fs.existsSync(framesDir)) {
  fs.mkdirSync(framesDir, { recursive: true });
}

// Clean any old frames
const oldFiles = fs.readdirSync(framesDir);
for (const f of oldFiles) {
  if (f.endsWith('.jpg')) {
    fs.unlinkSync(path.join(framesDir, f));
  }
}

const videoPath = path.resolve('hero-video', 'coffee-hero.mp4');
console.log('Extracting frames from:', videoPath);

// Locate ffmpeg from node_modules or system
const ffmpegBinary = path.resolve('..', 'CocoAura', 'node_modules', 'ffmpeg-static', 'ffmpeg.exe');

const cmd = `"${ffmpegBinary}" -i "${videoPath}" -vf "scale=1280:-1" -r 10 -q:v 4 "${path.join(framesDir, 'frame_%03d.jpg')}" -y`;
console.log('Running:', cmd);

execSync(cmd, { stdio: 'inherit' });

const extractedFiles = fs.readdirSync(framesDir).filter(f => f.endsWith('.jpg'));
console.log(`Successfully extracted ${extractedFiles.length} frames into public/frames!`);
