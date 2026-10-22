// Rule-based knowledge for the on-site assistant. No backend: answers come from the
// same verified content used across the site, matched by keyword.
import { contact, offices } from './site';
import { homeFaqs, serviceFaqs, trainingFaqs } from './faqs';

export const quickReplies = [
  'What services do you offer?',
  'ISO certification',
  'Training courses',
  'Verify a certificate',
  'Office locations',
  'Talk to a person',
];

const officeList = offices
  .map((o) => `• ${o.country} — ${o.city}${o.phones[0] ? ` (${o.phones[0]})` : ''}`)
  .join('\n');

const intents = [
  {
    keys: ['hi', 'hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening'],
    text: 'Hello! 👋 I’m Meridian’s virtual assistant. Ask me about our services, ISO certification, training courses, certificates or how to reach the team.',
  },
  {
    keys: ['service', 'services', 'offer', 'what do you do', 'help with', 'provide'],
    text: 'Meridian delivers five integrated services: Advisory, Compliance (ISO certification), Sustainability & ESG, Trainings and Corporate Wellbeing — across the Middle East, Asia and North America since 2005.',
    links: [
      { label: 'All services', to: '/services' },
      { label: 'Get a quote', to: '/get-quote' },
    ],
  },
  {
    keys: ['iso', 'certification', 'certify', 'compliance', 'audit', 'gap assessment', '9001', '14001', '45001', '27001', '22000', '50001', 'api q1', 'api q2'],
    text: 'We take you from gap assessment to certification: implementation, audit-ready documentation, internal audit and certification support for ISO 9001, 14001, 45001, 27001, 22000, 50001, 42001, API Q1/Q2 and more.',
    links: [
      { label: 'Compliance services', to: '/services/compliance' },
      { label: 'Book a free consultation', to: '/get-quote' },
    ],
  },
  {
    keys: ['training', 'course', 'courses', 'lead auditor', 'internal auditor', 'six sigma', 'green belt', 'black belt', 'pmp', 'rmp', 'osha', 'first aid', 'fire safety', 'train'],
    text: 'Our accredited courses include ISO lead & internal auditor programs, Lean Six Sigma Green/Black Belt, Train the Trainer, PMP/RMP exam prep and safety courses like OSHA 10/30, fire safety and first aid.',
    links: [
      { label: 'Browse courses', to: '/trainings' },
      { label: 'Meridian LMS', href: contact.lms },
    ],
  },
  {
    keys: ['sustainab', 'esg', 'leed', 'mostadam', 'ecovadis', 'carbon', 'energy', 'green', 'net zero', 'vision 2030'],
    text: 'Our sustainability team covers ESG reporting (GRI, SASB, TCFD), LEED and Mostadam certification, EcoVadis, ISO 14064 carbon footprints, ISO 50001 and energy audits — aligned with Saudi Vision 2030.',
    links: [{ label: 'Sustainability services', to: '/services/sustainability' }],
  },
  {
    keys: ['wellbeing', 'well-being', 'mental', 'counsel', 'stress', 'employee', 'hotline'],
    text: 'Our corporate wellbeing programs include licensed counselling, 24/7 hotlines in 10+ languages, wellbeing surveys, mindfulness training and HR analytics.',
    links: [{ label: 'Corporate wellbeing', to: '/services/corporate-wellbeing' }],
  },
  {
    keys: ['advisory', 'advice', 'consult', 'lean', 'strategy', 'change management', 'supply chain', 'process'],
    text: 'Our advisory practice covers Lean Six Sigma, supply chain, project & change management, process reengineering, ISO 27001/42001 and sector work in oil & gas, HSE and food safety.',
    links: [{ label: 'Advisory services', to: '/services/advisory' }],
  },
  {
    keys: ['verify', 'certificate', 'authentic', 'genuine', 'valid'],
    text: 'You can check any Meridian certificate using the unique code printed on it.',
    links: [{ label: 'Verify a certificate', to: '/verify-certificate' }],
  },
  {
    keys: ['lms', 'e-learning', 'elearning', 'online learning', 'portal', 'login', 'log in'],
    text: 'Our learning platform, Meridian LMS, hosts online courses and learning materials.',
    links: [{ label: 'Open Meridian LMS', href: contact.lms }],
  },
  {
    keys: ['office', 'location', 'address', 'where', 'dammam', 'bahrain', 'lahore', 'pakistan', 'canada', 'saudi'],
    text: `Our offices:\n${officeList}`,
    links: [{ label: 'Contact page', to: '/contact' }],
  },
  {
    keys: ['price', 'pricing', 'cost', 'quote', 'fee', 'fees', 'how much', 'proposal'],
    text: 'Pricing depends on the scope, standard and size of your organisation. Share a few details and a consultant will send a tailored proposal, usually within one business day.',
    links: [{ label: 'Request a quote', to: '/get-quote' }],
  },
  {
    keys: ['contact', 'phone', 'call', 'email', 'person', 'human', 'agent', 'talk', 'speak', 'whatsapp', 'reach'],
    text: `You can reach our team directly:\n📞 ${contact.phone}\n✉️ ${contact.email}`,
    links: [
      { label: 'Call now', href: contact.phoneHref },
      { label: 'Contact form', to: '/contact' },
    ],
  },
  {
    keys: ['about', 'who are you', 'history', 'founded', 'since', 'company', 'meridian'],
    text: 'Meridian Quality Management Professionals was founded in 2005 and is ISO 9001:2015 certified, with offices in Saudi Arabia, Bahrain, Pakistan and Canada. We were the first TVTC foreign-registered training centre in Saudi Arabia.',
    links: [{ label: 'About us', to: '/about' }],
  },
  {
    keys: ['thank', 'thanks', 'great', 'perfect', 'awesome'],
    text: 'You’re welcome! Anything else I can help you with?',
  },
];

const faqPool = [...homeFaqs, ...Object.values(serviceFaqs).flat(), ...trainingFaqs];
const words = (t) => t.toLowerCase().match(/[a-z0-9]+/g) || [];
const stop = new Set(['the', 'a', 'an', 'is', 'are', 'do', 'does', 'you', 'your', 'i', 'we', 'to', 'of', 'for', 'and', 'in', 'what', 'how', 'can', 'my', 'me', 'with', 'on', 'it']);

export function answer(input) {
  const q = ` ${input.toLowerCase()} `;
  let best = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = intent.keys.reduce((n, k) => (q.includes(k.length <= 3 ? ` ${k} ` : k) ? n + k.length : n), 0);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  if (best) return { text: best.text, links: best.links };

  // Fall back to the closest FAQ by shared keywords.
  const qWords = new Set(words(input).filter((w) => !stop.has(w) && w.length > 2));
  let faq = null;
  let faqScore = 0;
  for (const f of faqPool) {
    const score = words(f.q + ' ' + f.a).filter((w) => qWords.has(w)).length;
    if (score > faqScore) {
      faq = f;
      faqScore = score;
    }
  }
  if (faq && faqScore >= 2) return { text: faq.a };

  return {
    text: `I’m not sure I have the answer to that yet. Our team can help — call ${contact.phone} or email ${contact.email}.`,
    links: [
      { label: 'Contact us', to: '/contact' },
      { label: 'Request a quote', to: '/get-quote' },
    ],
  };
}
