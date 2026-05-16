import * as fs from 'fs';
import * as path from 'path';
import crypto from 'crypto';

const ASSETS_DIR = path.join(process.cwd(), '.assets');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

/**
 * Downloads an image from a Notion signed URL and saves it to the local assets directory.
 * @param url The expiring Notion image URL
 * @returns The unique ID/filename of the cached asset
 */
export async function cacheAsset(url: string): Promise<string> {
  // Generate a unique ID based on the URL (ignoring expiring query parameters like X-Amz-Date)
  // For Notion URLs, the path itself is usually unique enough, but let's hash the URL without query params.
  const urlWithoutQuery = url.split('?')[0];
  const assetId = crypto.createHash('sha256').update(urlWithoutQuery).digest('hex');
  
  // Try to determine extension from the URL, defaulting to .png or .jpg
  let ext = '.png';
  const match = urlWithoutQuery.match(/\.(png|jpe?g|gif|svg|webp)/i);
  if (match) {
    ext = match[0].toLowerCase();
  }

  const filename = `${assetId}${ext}`;
  const filepath = path.join(ASSETS_DIR, filename);

  // If already cached, return immediately
  if (fs.existsSync(filepath)) {
    return filename;
  }

  console.log(`Downloading new asset to cache: ${filename}`);

  // Download the image
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download asset: ${response.statusText}`);
  }

  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));

  return filename;
}

export function getAssetPath(filename: string): string {
  return path.join(ASSETS_DIR, filename);
}
