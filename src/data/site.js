// Central content for the Meridian site. Sourced from meqmp.com.

export const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const photos = {
  analytics: img('1454165804606-c3d57bc86b40'),
  wind: img('1466611653911-95081537e5b7'),
  towers: img('1486406146926-c627a92ad1ab'),
  solarAerial: img('1497435334941-8c899ee9e8e9'),
  site: img('1504307651254-35680f356dfd'),
  meditation: img('1506126613408-eca07ce68773'),
  solar: img('1509391366360-2e959784a276'),
  industrial: img('1513828583688-c52646db42da'),
  meeting: img('1517048676732-d65bc937f952'),
  team: img('1522071820081-009f0129c71c'),
  classroom: img('1524178232363-1fb2b075b655'),
  recycle: img('1532996122724-e3c354a0b15b'),
  boardroom: img('1542744173-8e7e53415bb0'),
  yoga: img('1544367567-0f2fcb009e0b'),
  workshop: img('1552664730-d307ca884978'),
  office: img('1556761175-b413da4baf72'),
  server: img('1573164713988-8665fc963095'),
  health: img('1576091160550-2173dba999ef'),
  lab: img('1581091226825-a6a2a5aee158'),
  blueprint: img('1581092160562-40aa08e78837'),
  success: img('1600880292203-757bb62b4baf'),
};

export const contact = {
  phone: '+966 50 939 4640',
  phoneHref: 'tel:+966509394640',
  email: 'info@meqmp.com',
  lms: 'https://meridian-lms.com/',
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/meridian-quality-management' },
    { name: 'Facebook', href: 'https://www.facebook.com/meqmp.net' },
    { name: 'YouTube', href: 'https://www.youtube.com/@MeridianQMP' },
  ],
};

export const offices = [
  {
    country: 'Saudi Arabia',
    city: 'Dammam',
    flag: '🇸🇦',
    address: 'Ground Floor, Building 9, Askan District, Dammam, Saudi Arabia',
    phones: ['+966 50 939 4640', '+966 50 787 9405'],
    hq: true,
  },
  {
    country: 'Bahrain',
    city: 'Sitra',
    flag: '🇧🇭',
    address: 'Office 09, LMC Building 852, Road 3618, Block 436, Al Seef, Bahrain',
    phones: ['+973 3808 7754', '+973 3372 8167'],
  },
  {
    country: 'Pakistan',
    city: 'Lahore',
    flag: '🇵🇰',
    address: '69 CCA, Sector A, DHA Phase 9, Lahore, Pakistan',
    phones: ['+92 321 8080493'],
  },
  {
    country: 'Canada',
    city: 'North America',
    flag: '🇨🇦',
    address: 'Serving clients across North America',
    phones: [],
  },
];

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Advisory', to: '/services/advisory', desc: 'Strategy, standards & excellence models' },
      { label: 'Compliance', to: '/services/compliance', desc: 'ISO certification & audit readiness' },
      { label: 'Sustainability', to: '/services/sustainability', desc: 'ESG, LEED, carbon & energy' },
      { label: 'Trainings', to: '/trainings', desc: 'Lead auditor, Six Sigma, HSE & more' },
      { label: 'Corporate Wellbeing', to: '/services/corporate-wellbeing', desc: 'Mental health & workforce resilience' },
    ],
  },
  { label: 'Insights', to: '/insights' },
  { label: 'Verify Certificate', to: '/verify-certificate' },
  { label: 'Contact', to: '/contact' },
];

export const heroStats = [
  { value: 530, suffix: '+', label: 'Consultancies delivered' },
  { value: 2500, suffix: '+', label: 'Trainings conducted' },
  { value: 10000, suffix: '+', label: 'Professionals served' },
  { value: 20, suffix: '+', label: 'Years since 2005' },
];

export const painPoints = [
  'Rising operational costs',
  'Quality inconsistencies',
  'Missed compliance deadlines',
  'ISO documentation challenges',
  'Operational inefficiencies',
  'Non-compliance risk exposure',
];

export const valueProps = [
  { icon: 'PiggyBank', title: 'Cost Saving', text: 'Streamlined operations that strip out waste and cut the cost of quality.' },
  { icon: 'ScanSearch', title: 'Operational Clarity', text: 'Quality systems designed to reduce complexity and increase consistency.' },
  { icon: 'Award', title: 'Excellence', text: 'Sustained performance and permanent readiness for every regulator and auditor.' },
  { icon: 'Gauge', title: 'Efficiency', text: 'Data-backed process improvements that unlock capacity for growth.' },
];

export const howWeWork = [
  { title: 'Discover & Define', text: 'We understand your goals and challenges, define scope, identify compliance gaps and set a solid foundation.' },
  { title: 'Build & Align', text: 'We co-develop standards-aligned systems, training programs and advisory plans tailored to your industry.' },
  { title: 'Scale & Implement', text: 'Certified auditors, expert trainers and regional specialists roll systems out across departments and locations.' },
  { title: 'Sustain & Elevate', text: 'Monitoring, refresher training, internal audits and strategic consulting keep you improving.' },
];

export const team = [
  {
    name: 'Asim Baig',
    role: 'Chief Executive Officer',
    initials: 'AB',
    bio: 'Mechanical engineer and MBA with ~29 years of leadership across quality, HSE, risk, business continuity and HR. 1,000+ audits, 100+ consultancy projects and 5,000+ people trained.',
    tags: ['IRCA Lead Auditor', 'Aramco Approved', 'NEOM Approved'],
  },
  {
    name: 'Ameenudeen Ansari',
    role: 'Senior Management Consultant',
    initials: 'AA',
    bio: '18+ years in management systems, auditing, training and HSE, with hands-on API Q1 and Six Sigma experience.',
    tags: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
  },
  {
    name: 'Kamran Rizvi',
    role: 'Strategic Advisor',
    initials: 'KR',
    bio: '20+ years across HR, quality assurance, training and change leadership in retail, education and sustainability. Recognised by the Canadian House of Commons for community work.',
    tags: ['Change Leadership', 'HR Strategy'],
  },
  {
    name: 'Shayan Arshad',
    role: 'QHSE & Food Safety Consultant',
    initials: 'SA',
    bio: 'Industrial engineer and certified food safety expert with a decade in QHSE and process optimisation.',
    tags: ['Lean Six Sigma GB', 'IRCA Lead Auditor', 'Food Safety'],
  },
];

export const testimonials = [
  {
    quote: 'Demonstrated exceptional professionalism, sharp skills, and a deep understanding of the field.',
    name: 'Dr. Alia Zafar',
    org: 'Al Yamamah University',
  },
  {
    quote: 'Got several trainings to our employees and added value to the successfulness of the team.',
    name: 'Fatima Al Marzouk',
    org: 'Training Manager, Siemens Saudi Arabia',
  },
  {
    quote: 'Superb QMS professional and is always ready to help his clients.',
    name: 'Irfan Pandor',
    org: 'Ministry of Justice (UK)',
  },
];

export const clients = [
  'Shell', 'Aramco', 'SABIC', 'NEOM', 'Rolls-Royce', 'TotalEnergies', 'Baker Hughes', 'Siemens',
  'SATORP', 'Jacobs', 'Engie', 'Jeddah Cables', 'Tamimi Markets', 'Descon', 'Sinohydro', 'Golden Tulip',
];

export const industries = [
  'Oil & Gas', 'Petrochemicals', 'Infrastructure', 'Telecom', 'Supply Chain & Logistics',
  'Manufacturing', 'Healthcare & Pharma', 'Insurance & Banking', 'Education', 'Packaging',
  'Hospitality', 'Construction', 'Public Sector', 'Food & Beverage',
];

export const standards = [
  { code: 'ISO 9001', name: 'Quality Management', text: 'Customer satisfaction and continual improvement.' },
  { code: 'ISO 14001', name: 'Environmental Management', text: 'Environmental planning, policies and audits.' },
  { code: 'ISO 45001', name: 'Occupational Health & Safety', text: 'Safe, healthy workplaces and hazard control.' },
  { code: 'ISO 27001', name: 'Information Security', text: 'Security risk management, controls and continuity.' },
  { code: 'ISO 42001', name: 'AI Management Systems', text: 'Responsible AI governance and ethical safeguards.' },
  { code: 'ISO 22000', name: 'Food Safety', text: 'Hazard management and product safety.' },
  { code: 'ISO 50001', name: 'Energy Management', text: 'Energy baselines, targets and performance.' },
  { code: 'ISO 41001', name: 'Facility Management', text: 'Lifecycle cost and asset performance.' },
  { code: 'ISO 31000', name: 'Risk Management', text: 'Enterprise-wide strategic and operational resilience.' },
  { code: 'ISO 37001', name: 'Anti-Bribery', text: 'Anti-bribery programs and due diligence.' },
  { code: 'ISO 20121', name: 'Sustainable Events', text: 'Sustainable event planning and procurement.' },
  { code: 'API Q1 / Q2', name: 'Oil & Gas Quality', text: 'Quality for petroleum manufacturing and services.' },
  { code: 'ISO 17020', name: 'Inspection Bodies', text: 'Competence requirements for inspection bodies.' },
  { code: 'ISO 17021', name: 'Certification Bodies', text: 'Requirements for bodies auditing management systems.' },
  { code: 'ISO 17025', name: 'Testing & Calibration Labs', text: 'Laboratory competence and impartiality.' },
];

export const whyUs = [
  { icon: 'BadgeCheck', title: 'Globally certified trainers', text: 'IRCA-registered lead auditors and accredited instructors on every engagement.' },
  { icon: 'ShieldCheck', title: 'Industry-recognised auditors', text: 'Aramco- and NEOM-approved auditors trusted by regulators and majors.' },
  { icon: 'Trophy', title: 'Proven delivery', text: 'Hundreds of successful certifications, programs and transformations since 2005.' },
  { icon: 'Landmark', title: 'First TVTC foreign-registered centre', text: 'The first TVTC Foreign Registered Training Center in Saudi Arabia.' },
];
