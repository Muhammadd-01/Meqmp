import { photos } from './site';

// The five service pillars. Trainings has its own page (/trainings).
export const pillars = [
  {
    slug: 'advisory',
    to: '/services/advisory',
    icon: 'Compass',
    title: 'Advisory',
    short: 'Solve operational problems, streamline processes and align strategy with international standards for long-term growth.',
    image: photos.workshop,
  },
  {
    slug: 'compliance',
    to: '/services/compliance',
    icon: 'ShieldCheck',
    title: 'Compliance',
    short: 'Navigate complex regulatory frameworks and stay ISO- and legally compliant through audits, inspections and expert guidance.',
    image: photos.blueprint,
  },
  {
    slug: 'sustainability',
    to: '/services/sustainability',
    icon: 'Leaf',
    title: 'Sustainability',
    short: 'Build sustainable practices, improve environmental performance and earn recognised green certifications.',
    image: photos.solarAerial,
  },
  {
    slug: 'trainings',
    to: '/trainings',
    icon: 'GraduationCap',
    title: 'Trainings',
    short: 'Practical, customised learning from internationally certified trainers that builds lasting workforce capability.',
    image: photos.classroom,
  },
  {
    slug: 'corporate-wellbeing',
    to: '/services/corporate-wellbeing',
    icon: 'HeartPulse',
    title: 'Corporate Wellbeing',
    short: 'Programs that improve mental health, productivity and work-life balance while reducing stress and burnout.',
    image: photos.meditation,
  },
];

export const serviceDetails = {
  advisory: {
    eyebrow: 'Advisory',
    title: 'Comprehensive Advisory Solutions',
    highlight: 'Advisory',
    tagline: 'Strategies, standards & sustainable growth',
    intro:
      'Empowering your business with sustainable strategies and people-centred excellence. We help you streamline operations, improve efficiency and embed sustainability into everyday practice.',
    image: photos.workshop,
    icon: 'Compass',
    insight: { value: '29', suffix: ' yrs', text: 'of leadership experience heading our advisory practice.' },
    groups: [
      {
        title: 'Management Strategies & Excellence Models',
        text: 'Frameworks that streamline operations, lift efficiency and build excellence into how you work.',
        items: [
          { title: 'Lean Six Sigma', text: 'Eliminate waste and improve process capability with data-driven methods.' },
          { title: 'Supply Chain Optimisation', text: 'Risk-aware procurement, logistics and vendor performance.' },
          { title: 'Project Management', text: 'Outcome-driven delivery using PMI and PRINCE2 methodologies.' },
          { title: 'Change Management', text: 'Lead cultural, digital and structural transformation with confidence.' },
          { title: 'Process Reengineering', text: 'Redesigned workflows that cut cost and build cross-functional synergy.' },
          { title: 'Corporate Wellbeing', text: 'People programs that strengthen engagement and productivity.' },
        ],
      },
      {
        title: 'Sector-Specific Excellence',
        text: 'Specialist advisory tuned to the realities of your industry.',
        items: [
          { title: 'Industrial Optimisation', text: 'Process audits, regulatory assessments and lean transformation.' },
          { title: 'IT & Information Security', text: 'ISO 27001 governance, data protection and AI governance (ISO 42001).' },
          { title: 'Oil & Gas', text: 'API Q1/Q2 and ISO standards for technical and HSE compliance.' },
          { title: 'Health, Safety & Fire', text: 'Risk assessments, fire safety systems and ISO 45001 alignment.' },
          { title: 'Food Safety & Hygiene', text: 'HACCP-based inspections and ISO 22000 systems.' },
          { title: 'Facilities Management', text: 'ISO 41001 service delivery and vendor inspections.' },
        ],
      },
    ],
    showStandards: true,
    process: [
      { title: 'Initial Consultation', text: 'Understand your needs and define tailored objectives.' },
      { title: 'Assessment & Analysis', text: 'Deep evaluation to surface critical challenges and opportunities.' },
      { title: 'Strategic Planning', text: 'Customised action plans aligned with your goals.' },
      { title: 'Implementation Support', text: 'Hands-on guidance to ensure successful execution.' },
      { title: 'Monitoring & Evaluation', text: 'Track progress and refine strategies for lasting results.' },
      { title: 'Capacity Building', text: 'Ongoing advisory and knowledge transfer to your teams.' },
    ],
    benefits: [
      'Improved operational efficiency',
      'Strategy aligned with global standards',
      'Reduced risk and cost of quality',
      'Sustainability embedded in operations',
      'Stronger internal capability',
    ],
  },

  compliance: {
    eyebrow: 'Compliance',
    title: 'Integrated Compliance Solutions',
    highlight: 'Compliance',
    tagline: 'Audit-ready, every day',
    intro:
      'We align your operations with international standards, local regulations and industry best practice — mitigating risk, driving operational excellence and keeping you permanently audit-ready.',
    image: photos.blueprint,
    icon: 'ShieldCheck',
    insight: { value: '33', suffix: '%', text: 'less workplace misconduct in organisations with strong ethics & compliance programs (ethics.org).' },
    groups: [
      {
        title: 'Why Compliance Matters',
        text: 'Compliance is more than a certificate on the wall — it is a competitive advantage.',
        items: [
          { title: 'Minimise risk', text: 'Reduce legal, reputational and financial exposure.' },
          { title: 'Market access', text: 'Accelerate entry to new markets and global credibility.' },
          { title: 'Resilience', text: 'Boost operational consistency and system resilience.' },
          { title: 'Faster certification', text: 'Streamlined certification processes and documentation.' },
          { title: 'Stakeholder trust', text: 'Strengthen regulatory alignment and stakeholder confidence.' },
          { title: 'Corporate wellbeing compliance', text: 'Wellbeing programs aligned with ESG, HR and OH standards.' },
        ],
      },
    ],
    showStandards: true,
    process: [
      { title: 'Gap Assessment', text: 'Evaluate your current compliance posture against the target standard.' },
      { title: 'Implementation & Documentation', text: 'Build organised, audit-ready documentation and controls.' },
      { title: 'Internal Audit & Readiness', text: 'Test the system and close findings before the external audit.' },
      { title: 'Certification', text: 'Support you through to successful certification — and beyond.' },
    ],
    why: [
      { title: 'Certified compliance consultants', text: 'Experts across multi-sector audits, regulators and certification bodies.' },
      { title: 'Globally recognised methodology', text: 'Combining ISO, ESG and national frameworks.' },
      { title: 'Audit-ready documentation', text: 'Clear, organised and aligned to certification requirements.' },
      { title: 'End-to-end partnership', text: 'With you from gap assessment to certification.' },
    ],
    benefits: [
      'Lower legal & financial risk',
      'Faster market access',
      'Consistent, resilient operations',
      'Streamlined certification',
      'Stronger stakeholder trust',
    ],
  },

  sustainability: {
    eyebrow: 'Sustainability',
    title: 'Sustainability & Climate Solutions',
    highlight: 'Climate',
    tagline: 'Create value now. Protect the future.',
    intro:
      "Sustainability is no longer optional. We help organisations go beyond targets to lead with purpose — with strategies that are practical, measurable and aligned with global standards, including flagship work on Saudi Arabia's NEOM.",
    image: photos.solarAerial,
    icon: 'Leaf',
    insight: { value: '28', suffix: '%', text: 'carbon reduction and EcoVadis Silver achieved by a regional FMCG brand within 12 months.' },
    groups: [
      {
        title: 'Our Sustainability Services',
        text: 'Ten specialist services, from reporting to net-zero operations.',
        items: [
          { title: 'Sustainability Reporting', text: 'Investor-grade ESG reports aligned with GRI, SASB, SDG and TCFD.' },
          { title: 'LEED Certification', text: 'From energy-efficient design through certification management.' },
          { title: 'Mostadam Certification', text: "Saudi Arabia's national green building standard, aligned with Vision 2030." },
          { title: 'EcoVadis & CSR', text: 'Improve ratings across labour, ethics, environment and procurement.' },
          { title: 'Life Cycle Analysis (LCA)', text: 'Measure impact across the full product life cycle.' },
          { title: 'Carbon Footprint Assessment', text: 'ISO 14064-compliant GHG measurement across Scope 1, 2 and 3.' },
          { title: 'Green Building Advisory', text: 'Material selection and energy modelling; WELL & BREEAM support.' },
          { title: 'ISO 50001 Energy Management', text: 'Energy management systems that lower utility costs.' },
          { title: 'Energy Audits', text: 'Identify efficiencies and savings on the path to net zero.' },
          { title: 'Sustainability Training', text: 'ESG, LEED, Mostadam and carbon programs for your teams.' },
        ],
      },
    ],
    process: [
      { title: 'Baseline', text: 'Measure emissions, energy and ESG maturity.' },
      { title: 'Roadmap', text: 'Set science-aligned targets and a practical plan.' },
      { title: 'Certify', text: 'Deliver LEED, Mostadam, EcoVadis and ISO 50001.' },
      { title: 'Report & Improve', text: 'Investor-grade reporting and continual improvement.' },
    ],
    why: [
      { title: 'Cross-sector experience', text: 'Construction, retail, manufacturing and healthcare.' },
      { title: 'Vision 2030 alignment', text: "Deep experience in the Middle East's sustainability landscape." },
      { title: 'Certified professionals', text: 'LEED APs, GRI-certified reporters and ISO consultants.' },
      { title: 'End-to-end delivery', text: 'Strategy, implementation, audits and training.' },
    ],
    benefits: [
      'Reduce risk and unlock efficiencies',
      'Meet investor & regulator expectations',
      'Strengthen brand credibility',
      'Prepare for the climate transition',
      'Win in sustainable procurement',
    ],
  },

  'corporate-wellbeing': {
    eyebrow: 'Corporate Wellbeing',
    title: 'Where People Thrive, Performance Follows',
    highlight: 'Thrive',
    tagline: 'Mental, emotional & social health at work',
    intro:
      'A strategic commitment to your people — not a set of perks. Multilingual programs for white- and blue-collar workforces combining counselling, AI-driven health tools, surveys, training and real-time support.',
    image: photos.meditation,
    icon: 'HeartPulse',
    insight: { value: '41', suffix: '%', text: 'lower absenteeism and 23% higher profitability for companies with strong wellbeing programs.' },
    groups: [
      {
        title: 'Wellbeing Services',
        text: 'Fully integrated, data-driven and confidential support in 10+ languages.',
        items: [
          { title: 'Counselling Services', text: '50-minute video sessions with licensed therapists in Arabic, English, Urdu, Hindi and more.' },
          { title: '24/7 Multilingual Hotlines', text: 'WhatsApp chat with 30-minute responses and toll-free lines in 10+ languages.' },
          { title: 'Surveys & Psychological Checks', text: 'Resilience Checkpoint, Wellbeing Index, Stress@Work and Financial Wellbeing.' },
          { title: 'On-Site & Virtual Trainings', text: 'Mindfulness, Mental Health First Responder, leadership psychology and more.' },
          { title: 'LMS-Ready E-Learning', text: 'Modules on resilience, financial wellness, safety and active listening.' },
          { title: 'Workshops & Guided Meditation', text: 'Live sessions on sleep hygiene, mindfulness and daily stress relief.' },
          { title: 'AI Safety & Health Tools', text: 'Fleet driver safety, health management AI and voice-based fitness detection.' },
          { title: 'HR Analytics & Consultancy', text: 'Quarterly reports on absenteeism, stress trends and productivity.' },
        ],
      },
    ],
    process: [
      { title: 'Wellbeing Audit', text: 'Assess mental health trends, stress indicators, absenteeism and sentiment.' },
      { title: 'Strategy Development', text: 'A custom roadmap based on demographics, needs and risk profiles.' },
      { title: 'Program Implementation', text: 'Hotlines, counselling, trainings, workshops and welfare initiatives.' },
      { title: 'Impact Measurement', text: 'Track participation, behaviour change and quarterly trends.' },
    ],
    why: [
      { title: 'Fully integrated platform', text: 'One partner for counselling, training, surveys and analytics.' },
      { title: 'Localised in 10+ languages', text: 'Support every worker in the language they think in.' },
      { title: 'Licensed therapists', text: 'Plus global training teams and white-labelled portals.' },
      { title: 'Data-driven & confidential', text: 'Actionable insight for HR without compromising privacy.' },
    ],
    benefits: [
      'Lower absenteeism & turnover',
      'Actionable data for HR & leadership',
      'Higher engagement & retention',
      'Proactive psychosocial risk reduction',
      'Immediate support for diverse workforces',
    ],
  },
};
