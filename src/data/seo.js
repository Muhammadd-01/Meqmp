// Per-route SEO + structured data. Used client-side by <Seo /> and at build time by
// scripts/prerender.mjs, so every page ships real <head> tags and JSON-LD in its HTML.
import { contact, offices, photos, standards, team } from './site';
import { pillars, serviceDetails } from './services';
import { articles, trainings } from './content';
import { homeFaqs, serviceFaqs, trainingFaqs } from './faqs';

export const SITE_URL = 'https://meqmp.com';
export const SITE_NAME = 'Meridian Quality Management Professionals';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const ORG_ID = `${SITE_URL}/#organization`;

const abs = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;

const postal = {
  'Saudi Arabia': { streetAddress: 'Ground Floor, Building 9, Askan District', addressLocality: 'Dammam', addressRegion: 'Eastern Province', addressCountry: 'SA' },
  Bahrain: { streetAddress: 'Office 09, LMC Building 852, Road 3618, Block 436', addressLocality: 'Al Seef', addressCountry: 'BH' },
  Pakistan: { streetAddress: '69 CCA, Sector A, DHA Phase 9', addressLocality: 'Lahore', addressRegion: 'Punjab', addressCountry: 'PK' },
};

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: ['MEQMP', 'Meridian', 'Meridians Quality Management'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: OG_IMAGE,
  description:
    'ISO 9001:2015 certified consultancy providing advisory, training, compliance, sustainability and corporate wellbeing services across the Middle East, Asia and North America since 2005.',
  foundingDate: '2005',
  email: contact.email,
  telephone: contact.phone,
  priceRange: '$$',
  address: { '@type': 'PostalAddress', ...postal['Saudi Arabia'] },
  areaServed: ['Saudi Arabia', 'Bahrain', 'Pakistan', 'Canada', 'Middle East', 'Asia', 'North America'],
  sameAs: contact.social.map((s) => s.href),
  knowsAbout: [...standards.map((s) => `${s.code} ${s.name}`), 'Lean Six Sigma', 'ESG', 'LEED', 'Mostadam', 'EcoVadis', 'Corporate Wellbeing'],
  parentOrganization: { '@type': 'Organization', name: 'Gulf Capital' },
  employee: team.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: contact.phone, email: contact.email, availableLanguage: ['English', 'Arabic', 'Urdu'] },
  ],
  department: offices
    .filter((o) => postal[o.country])
    .map((o) => ({
      '@type': 'ProfessionalService',
      name: `${SITE_NAME} — ${o.country}`,
      address: { '@type': 'PostalAddress', ...postal[o.country] },
      telephone: o.phones[0],
      email: contact.email,
      parentOrganization: { '@id': ORG_ID },
    })),
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

const faqPage = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

const webPage = (path, title, description, type = 'WebPage') => ({
  '@type': type,
  '@id': `${abs(path)}#webpage`,
  url: abs(path),
  name: title,
  description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
});

function page({ path, title, description, image = OG_IMAGE, type = 'website', pageType, trail = [], extra = [], noindex = false }) {
  const graph = [organization, website, webPage(path, title, description, pageType)];
  if (trail.length) graph.push(breadcrumbs(trail));
  graph.push(...extra);
  return {
    title: path === '/' ? title : `${title} | Meridian QMP`,
    description,
    canonical: abs(path),
    image,
    type,
    noindex,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  };
}

const serviceMeta = {
  advisory: {
    title: 'Advisory — Lean Six Sigma & Strategy Consulting',
    description:
      'Lean Six Sigma, supply chain, change management, ISO 27001/42001 and API Q1/Q2 advisory for organisations in Saudi Arabia, Bahrain and beyond.',
  },
  compliance: {
    title: 'ISO Compliance & Certification Consultants',
    description:
      'Gap assessment to certification for ISO 9001, 14001, 45001, 27001, 22000, 50001 and API Q1/Q2, with audit-ready documentation from certified consultants.',
  },
  sustainability: {
    title: 'ESG Consulting — LEED, Mostadam & EcoVadis',
    description:
      'ESG reporting (GRI, SASB, TCFD), LEED and Mostadam certification, EcoVadis, ISO 14064 carbon footprints and ISO 50001, aligned with Saudi Vision 2030.',
  },
  'corporate-wellbeing': {
    title: 'Corporate Wellbeing Programs & Counselling',
    description:
      'Multilingual employee wellbeing: licensed counselling, 24/7 hotlines in 10+ languages, psychological surveys, mindfulness training and HR analytics.',
  },
};

export const staticRoutes = [
  '/',
  '/about',
  '/services',
  ...Object.keys(serviceDetails).map((s) => `/services/${s}`),
  '/trainings',
  '/insights',
  ...articles.map((a) => `/insights/${a.slug}`),
  '/verify-certificate',
  '/contact',
  '/get-quote',
];

export function getSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') {
    return page({
      path,
      title: 'Meridian QMP | ISO Consulting & Training, Saudi Arabia',
      description:
        'ISO 9001:2015 certified consultancy since 2005: ISO certification, auditor training, compliance, ESG and wellbeing across Saudi Arabia, Bahrain & beyond.',
      extra: [faqPage(homeFaqs)],
    });
  }

  if (path === '/about') {
    return page({
      path,
      pageType: 'AboutPage',
      title: 'About Meridian — Excellence Since 2005',
      description:
        'ISO 9001:2015 certified consultancy founded in 2005, with offices in Dammam, Bahrain, Lahore and Canada. First TVTC foreign-registered training centre in KSA.',
      image: photos.boardroom,
      trail: [{ name: 'About', path }],
    });
  }

  if (path === '/services') {
    return page({
      path,
      pageType: 'CollectionPage',
      title: 'Quality, ESG, Training & Wellbeing Services',
      description:
        'Advisory, ISO compliance, sustainability, training and corporate wellbeing from one accountable partner across the Middle East, Asia and North America.',
      image: photos.office,
      trail: [{ name: 'Services', path }],
      extra: [
        {
          '@type': 'ItemList',
          itemListElement: pillars.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: abs(p.to) })),
        },
      ],
    });
  }

  const service = path.match(/^\/services\/([\w-]+)$/);
  if (service && serviceDetails[service[1]]) {
    const slug = service[1];
    const d = serviceDetails[slug];
    const meta = serviceMeta[slug];
    return page({
      path,
      title: meta.title,
      description: meta.description,
      image: d.image,
      trail: [{ name: 'Services', path: '/services' }, { name: d.eyebrow, path }],
      extra: [
        {
          '@type': 'Service',
          name: d.eyebrow,
          serviceType: d.title,
          description: d.intro,
          provider: { '@id': ORG_ID },
          areaServed: organization.areaServed,
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${d.eyebrow} services`,
            itemListElement: d.groups.flatMap((g) => g.items).map((it) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: it.title, description: it.text },
            })),
          },
        },
        faqPage(serviceFaqs[slug]),
      ],
    });
  }

  if (path === '/trainings') {
    return page({
      path,
      title: 'ISO Lead Auditor & Six Sigma Training Courses',
      description:
        'Accredited ISO lead and internal auditor courses, Lean Six Sigma, PMP/RMP exam prep and OSHA safety training in Saudi Arabia, Bahrain, Pakistan & online.',
      image: photos.classroom,
      trail: [{ name: 'Services', path: '/services' }, { name: 'Trainings', path }],
      extra: [
        {
          '@type': 'ItemList',
          name: 'Meridian training courses',
          itemListElement: trainings.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Course',
              name: t.title,
              description: `${t.title} — ${t.name}. ${t.category} course by Meridian Quality Management Professionals.`,
              provider: { '@id': ORG_ID },
            },
          })),
        },
        faqPage(trainingFaqs),
      ],
    });
  }

  if (path === '/insights') {
    return page({
      path,
      pageType: 'CollectionPage',
      title: 'Insights — ISO, ESG & Quality Articles',
      description: 'Articles on ISO 9001:2026, sustainability for SMEs, risk and operational excellence from Meridian’s consultants.',
      image: photos.analytics,
      trail: [{ name: 'Insights', path }],
    });
  }

  const post = path.match(/^\/insights\/([\w-]+)$/);
  const a = post && articles.find((x) => x.slug === post[1]);
  if (a) {
    return page({
      path,
      type: 'article',
      title: a.seoTitle || a.title,
      description: a.excerpt,
      image: a.image,
      trail: [{ name: 'Insights', path: '/insights' }, { name: a.title, path }],
      extra: [
        {
          '@type': 'Article',
          headline: a.title,
          description: a.excerpt,
          image: a.image,
          datePublished: a.isoDate,
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: `${abs(path)}#webpage`,
          articleSection: a.category,
        },
      ],
    });
  }

  if (path === '/verify-certificate') {
    return page({
      path,
      title: 'Verify a Meridian Certificate',
      description: 'Confirm the authenticity of a training certificate issued by Meridian Quality Management Professionals using its unique certificate code.',
      image: photos.lab,
      trail: [{ name: 'Verify Certificate', path }],
    });
  }

  if (path === '/contact') {
    return page({
      path,
      pageType: 'ContactPage',
      title: 'Contact Meridian — Dammam, Bahrain, Lahore',
      description: `Call ${contact.phone} or email ${contact.email}. Offices in Dammam (Saudi Arabia), Al Seef (Bahrain), Lahore (Pakistan) and Canada.`,
      image: photos.success,
      trail: [{ name: 'Contact', path }],
    });
  }

  if (path === '/get-quote') {
    return page({
      path,
      title: 'Request a Quote — Free Consultation',
      description: 'Tell us what you need — ISO certification, training, ESG or wellbeing — and a Meridian consultant will send a tailored proposal.',
      image: photos.team,
      trail: [{ name: 'Get a Quote', path }],
    });
  }

  return page({
    path,
    title: 'Page not found',
    description: 'The page you are looking for has moved or no longer exists.',
    noindex: true,
  });
}
