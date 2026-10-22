// Static-site generation: renders every route to HTML with its own <head>, then
// writes sitemap.xml. Runs after `vite build` and the SSR build (see package.json).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, renderHead, staticRoutes, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

// data-route lets the client hydrate only when this markup belongs to the current URL.
const page = (url) =>
  template
    .replace('<!--app-head-->', renderHead(url))
    .replace('<div id="root"><!--app-html-->', `<div id="root" data-route="${url}">${render(url)}`);

for (const url of staticRoutes) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const html = page(url);
  fs.writeFileSync(file, html);
  // Also write /route.html so hosts that resolve clean URLs to files (Vercel cleanUrls) find it.
  if (url !== '/') fs.writeFileSync(path.join(dist, `${url}.html`), html);
  console.log('prerendered', url);
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

const today = new Date().toISOString().slice(0, 10);
const priority = (u) => (u === '/' ? '1.0' : u.split('/').length > 2 ? '0.7' : '0.8');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod><priority>${priority(u)}</priority></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`sitemap.xml written (${staticRoutes.length} urls)`);
