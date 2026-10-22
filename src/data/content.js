import { photos } from './site';

export const trainingCategories = [
  'All',
  'Lead Auditor',
  'Internal Auditor',
  'Leadership & Management',
  'Exam Preparation',
  'Safety & Environment',
];

const lead = (code, name) => ({ title: `${code} Lead Auditor`, code, name, category: 'Lead Auditor' });
const internal = (code, name) => ({ title: `${code} Internal Auditor`, code, name, category: 'Internal Auditor' });

export const trainings = [
  lead('ISO 9001:2015', 'Quality Management'),
  lead('ISO 14001:2015', 'Environmental Management'),
  lead('ISO 45001:2018', 'Occupational Health & Safety'),
  lead('ISO 27001:2022', 'Information Security'),
  lead('ISO 31000:2018', 'Risk Management'),
  lead('ISO 41001:2018', 'Facility Management'),
  lead('ISO 50001:2018', 'Energy Management'),
  internal('ISO 9001:2015', 'Quality Management'),
  internal('ISO 14001:2015', 'Environmental Management'),
  internal('ISO 45001:2018', 'Occupational Health & Safety'),
  internal('ISO 27001:2022', 'Information Security'),
  internal('ISO 22000:2018', 'Food Safety'),
  internal('ISO 41001:2018', 'Facility Management'),
  internal('ISO 50001:2018', 'Energy Management'),
  { title: 'Lean Six Sigma Black Belt', name: 'Advanced process improvement', category: 'Leadership & Management' },
  { title: 'Lean Six Sigma Green Belt', name: 'Process improvement practitioner', category: 'Leadership & Management' },
  { title: 'Train The Trainer', name: 'Design and deliver effective training', category: 'Leadership & Management' },
  { title: 'Business Continuity Management', name: 'Resilience & recovery planning', category: 'Leadership & Management' },
  { title: 'ARAMCO Schedule Q Awareness', name: 'Supplier quality requirements', category: 'Leadership & Management' },
  { title: 'PMP Exam Preparation', name: 'Project Management Professional', category: 'Exam Preparation' },
  { title: 'RMP Exam Preparation', name: 'Risk Management Professional', category: 'Exam Preparation' },
  { title: 'OSHA 10 & 30 Hours GI/CI', name: 'General & construction industry', category: 'Safety & Environment' },
  { title: 'Fire Safety Awareness & Fire Fighting', name: 'Prevention and response', category: 'Safety & Environment' },
  { title: 'First Aid, CPR & AED', name: 'Life-saving workplace skills', category: 'Safety & Environment' },
  { title: '5S Sustainability & Workplace Organisation', name: 'Lean workplace fundamentals', category: 'Safety & Environment' },
  { title: 'Defensive Driving', name: 'Fleet and road safety', category: 'Safety & Environment' },
];

export const accreditations = ['CCL Canada', 'Highfield', 'Saaya', 'TVTC Registered'];

export const articles = [
  {
    slug: 'iso-9001-2026-early-preparation',
    title: 'ISO 9001:2026 — Why Early Preparation Is Your Competitive Advantage',
    excerpt:
      'Most organisations will treat ISO 9001:2026 as just another update. The ones that prepare early will turn the transition into a genuine edge.',
    date: 'October 7, 2025',
    category: 'Quality',
    readTime: '5 min read',
    image: photos.analytics,
    body: [
      'Most organisations will treat the ISO 9001:2026 revision as just another update — something to deal with when the certification body comes calling. That is a missed opportunity.',
      'Revisions to the world\'s most widely used quality standard always reflect where business is heading. Expect sharper focus on risk-based thinking, organisational context, climate considerations and the role of leadership in driving a quality culture.',
      'Early movers get time to run a calm gap assessment, train internal auditors on the new requirements, and fold changes into their existing improvement cycle rather than scrambling before a surveillance audit.',
      'Our recommendation: start with a gap assessment against the draft, brief top management, refresh your internal audit programme and plan the transition into your next management review. Meridian\'s IRCA-certified consultants can guide every step.',
    ],
  },
  {
    slug: 'sustainability-strategies-for-smes',
    title: 'Sustainability Strategies for SMEs: Cut Costs, Win Clients, Future-Proof',
    excerpt:
      'Many SMEs assume sustainability is expensive. In practice, the right first steps pay for themselves — and open doors with large buyers.',
    date: 'October 7, 2025',
    category: 'Sustainability',
    readTime: '6 min read',
    image: photos.solar,
    body: [
      'Many SMEs assume sustainability is a luxury reserved for large corporations. In reality, the first steps are usually the cheapest and fastest to pay back.',
      'Energy audits routinely uncover savings in lighting, HVAC and compressed air. Waste segregation lowers disposal costs. Simple supplier codes of conduct prepare you for the questionnaires large buyers now send.',
      'Ratings such as EcoVadis are increasingly a condition of doing business with multinationals. A credible score can be the difference between being shortlisted and being ignored.',
      'Start small: measure your baseline, pick three quick wins, publish a short sustainability statement and build from there. Meridian helps SMEs do exactly that — practically and affordably.',
    ],
  },
];

