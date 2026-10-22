import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE_NAME } from '../data/seo';

// Tags carrying data-seo are owned by this component (and by the prerender script),
// so each navigation can swap them wholesale.
export function seoTags(seo) {
  const meta = (attr, key, content) => ({ tag: 'meta', attrs: { [attr]: key, content } });
  return [
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'),
    { tag: 'link', attrs: { rel: 'canonical', href: seo.canonical } },
    meta('property', 'og:type', seo.type),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', seo.canonical),
    meta('property', 'og:image', seo.image),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', 'en_US'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', seo.image),
  ];
}

const escapeAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Serialised head used by scripts/prerender.mjs.
export function renderHead(pathname) {
  const seo = getSeo(pathname);
  const tags = seoTags(seo)
    .map(({ tag, attrs }) => `<${tag} data-seo ${Object.entries(attrs).map(([k, v]) => `${k}="${escapeAttr(v)}"`).join(' ')}>`)
    .join('\n    ');
  const json = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c');
  return `<title>${escapeAttr(seo.title)}</title>\n    ${tags}\n    <script type="application/ld+json" data-seo>${json}</script>`;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    document.head.querySelectorAll('[data-seo]').forEach((n) => n.remove());
    for (const { tag, attrs } of seoTags(seo)) {
      const el = document.createElement(tag);
      el.setAttribute('data-seo', '');
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    }
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.setAttribute('data-seo', '');
    ld.textContent = JSON.stringify(seo.jsonLd);
    document.head.appendChild(ld);
  }, [pathname]);

  return null;
}
