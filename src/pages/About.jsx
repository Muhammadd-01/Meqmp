import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Briefcase, CalendarCheck, Globe2, GraduationCap, Landmark, Leaf, MapPin, Mountain, Target, Telescope, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import Counter from '../components/Counter';
import Icon from '../components/Icon';
import CTASection from '../components/CTASection';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { ImageReveal, SplitText, Tilt } from '../components/Motion';
import Ticker from '../components/Ticker';
import { contact, heroStats, industries, offices, photos, srcSet, standards, team, whyUs } from '../data/site';
import { pillars } from '../data/services';

const pillarsOfPurpose = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To transform businesses by aligning them with global best practices — practical, measurable and built to last.',
  },
  {
    icon: Telescope,
    title: 'Our Vision',
    text: 'Excellence is not a destination but a continuous journey. We want every client to keep improving long after we leave.',
  },
  {
    icon: Mountain,
    title: 'Our Values',
    text: 'Innovation, integrity and long-term client impact guide every audit, training and advisory engagement we deliver.',
  },
];

// Plain, quotable facts: the block search and AI engines lift answers from.
const facts = [
  ['Founded', '2005'],
  ['Head office', 'Dammam, Saudi Arabia'],
  ['Offices', 'Saudi Arabia · Bahrain · Pakistan · Canada'],
  ['Certification', 'ISO 9001:2015'],
  ['Training status', 'First TVTC foreign-registered centre in KSA'],
  ['Auditors', 'IRCA lead auditors, Aramco & NEOM approved'],
  ['Standards', `${standards.length}+ ISO & API frameworks`],
  ['Contact', `${contact.phone} · ${contact.email}`],
];

const statIcons = [Briefcase, GraduationCap, Users, CalendarCheck];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Meridian"
        title="Together, we build sustainable excellence"
        highlight="sustainable excellence"
        text="An ISO 9001:2015 certified partner for advisory, training, compliance, sustainability and corporate wellbeing — serving the Middle East, Asia and North America since 2005."
        image={photos.boardroom}
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="section journey">
        <div className="container">
          <div className="journey__grid">
            <Reveal className="journey__copy" x={-30} y={0}>
              <span className="eyebrow">Our journey</span>
              <SplitText>From modest beginnings to a <span className="text-accent">trusted global partner</span></SplitText>
              <p className="lead">
                Meridian started with a simple belief: quality is not paperwork, it is how great organisations work.
              </p>
              <p>
                Two decades later we have helped hundreds of clients — from regional SMEs to global energy majors — build
                management systems that actually perform, with globally certified trainers, industry-recognised auditors
                and a proven track record of successful project execution.
              </p>
              <ul className="journey__points">
                <li><BadgeCheck size={18} /> ISO 9001:2015 certified</li>
                <li><Landmark size={18} /> First TVTC foreign-registered centre in KSA</li>
                <li><Globe2 size={18} /> Offices in 4 countries</li>
              </ul>
              <Link to="/services" className="btn btn--dark">What we do <ArrowRight size={18} /></Link>
            </Reveal>

            <div className="journey__media">
              <ImageReveal
                className="journey__img"
                from="right"
                src={photos.team.replace('w=1600', 'w=1000')}
                srcSet={srcSet(photos.team, [480, 768, 1080])}
                sizes="(max-width: 900px) 92vw, 46vw"
                alt="Meridian consultants collaborating"
              />
              <Reveal className="journey__badge" delay={0.5} y={20}>
                <strong>2005</strong>
                <span>Founded in Saudi Arabia</span>
              </Reveal>
              <div className="journey__ring" aria-hidden="true" />
            </div>
          </div>

          <Stagger className="journey__stats" gap={0.1}>
            {heroStats.map((s, i) => {
              const I = statIcons[i];
              return (
                <StaggerItem key={s.label} className="journey__stat">
                  <span className="journey__stat-icon"><I size={22} /></span>
                  <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span className="journey__stat-label">{s.label}</span>
                  <span className="journey__bar" aria-hidden="true"><span /></span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Key facts */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="At a glance" title="Meridian in key facts" />
          <Stagger as="dl" className="facts" gap={0.05}>
            {facts.map(([k, v]) => (
              <StaggerItem key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="What drives us" title="Purpose behind every engagement" />
          <Stagger className="grid grid-3">
            {pillarsOfPurpose.map(({ icon: I, title, text }) => (
              <StaggerItem key={title}>
                <Tilt className="h-full" max={6}>
                <SpotlightCard className="purpose-card">
                  <span className="icon-badge"><I size={26} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </SpotlightCard>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Ticker items={industries} />

      {/* Why choose us */}
      <section className="section section--deep">
        <div className="dot-grid" />
        <div className="glow glow--gold" style={{ width: 380, height: 380, left: -140, bottom: -160, opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionHeading eyebrow="Why choose us" title="Credentials that open doors" text="The certifications, approvals and experience our clients rely on when the stakes are high." />
          <Stagger className="grid grid-4">
            {whyUs.map((w) => (
              <StaggerItem key={w.title} className="why-card">
                <span className="why-card__icon"><Icon name={w.icon} size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="Meet the people behind Meridian" text="Lead auditors, engineers and change leaders with decades of hands-on experience." />
          <Stagger className="grid grid-4">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <article className="team-card" tabIndex={0}>
                  <div className="team-card__avatar">
                    <span>{m.initials}</span>
                  </div>
                  <h3>{m.name}</h3>
                  <span className="team-card__role">{m.role}</span>
                  <div className="team-card__front-tags">
                    {m.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <span className="team-card__hint">Read bio +</span>
                  <div className="team-card__reveal">
                    <strong>{m.name}</strong>
                    <p>{m.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Sustainability commitment */}
      <section className="section section--soft">
        <div className="container split">
          <ImageReveal className="commit__media" src={photos.wind.replace('w=1600', 'w=1100')} srcSet={srcSet(photos.wind, [480, 768, 1080])} sizes="(max-width: 900px) 90vw, 45vw" alt="Wind turbines at sunset">
            <div className="commit__badge"><Leaf size={22} /> LEED · GRI · UN SDGs</div>
          </ImageReveal>
          <Reveal x={30} y={0}>
            <span className="eyebrow">Our commitment</span>
            <SplitText>Sustainability is a responsibility, <span className="text-accent">not a trend</span></SplitText>
            <p className="lead">
              We help clients adopt green practices using LEED, GRI and UN SDG frameworks — from carbon footprint
              assessments and energy-efficient strategy design to full ESG compliance support.
            </p>
            <Link to="/services/sustainability" className="link-arrow">Explore sustainability services <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Core services" title="One partner, five disciplines" />
          <Stagger className="mini-services">
            {pillars.map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={p.to} className="mini-service">
                  <span className="mini-service__icon"><Icon name={p.icon} size={24} /></span>
                  <strong>{p.title}</strong>
                  <ArrowRight size={18} className="mini-service__arrow" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="industry-cloud">
            {industries.map((i) => <span key={i}>{i}</span>)}
          </Reveal>
        </div>
      </section>

      {/* Global presence */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Global presence" title="Local expertise, international standards" />
          <Stagger className="grid grid-4">
            {offices.map((o) => (
              <StaggerItem key={o.country}>
                <Tilt className="h-full" max={7}><SpotlightCard className="office-card">
                  <span className="office-card__flag" aria-hidden="true">{o.flag}</span>
                  {o.hq && <span className="chip chip--gold office-card__hq">Head office</span>}
                  <h3>{o.country}</h3>
                  <span className="office-card__city"><MapPin size={15} /> {o.city}</span>
                  <p>{o.address}</p>
                </SpotlightCard></Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
