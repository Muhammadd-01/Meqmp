import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, MapPin, Mountain, Target, Telescope } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import Counter from '../components/Counter';
import Icon from '../components/Icon';
import CTASection from '../components/CTASection';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { heroStats, industries, offices, photos, team, whyUs } from '../data/site';
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
      <section className="section">
        <div className="container split">
          <Reveal x={-30} y={0}>
            <span className="eyebrow">Our journey</span>
            <h2>From modest beginnings to a <span className="text-sky">trusted global partner</span></h2>
            <p className="lead">
              Meridian started with a simple belief: quality is not paperwork, it is how great organisations work.
            </p>
            <p>
              Two decades later we have helped hundreds of clients — from regional SMEs to global energy majors — build
              management systems that actually perform. We are proud to be the first TVTC Foreign Registered Training
              Center in Saudi Arabia, with globally certified trainers, industry-recognised auditors and a proven track
              record of successful project execution.
            </p>
            <Link to="/services" className="btn btn--dark">What we do <ArrowRight size={18} /></Link>
          </Reveal>

          <Reveal x={30} y={0} className="story-stats">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`story-stat story-stat--${i}`}>
                <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="What drives us" title="Purpose behind every engagement" />
          <Stagger className="grid grid-3">
            {pillarsOfPurpose.map(({ icon: I, title, text }) => (
              <StaggerItem key={title}>
                <SpotlightCard className="purpose-card">
                  <span className="icon-badge"><I size={26} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--deep">
        <div className="dot-grid" />
        <div className="glow glow--orange" style={{ width: 380, height: 380, left: -140, bottom: -160, opacity: 0.3 }} />
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
          <Reveal className="commit__media" x={-30} y={0}>
            <img src={photos.wind.replace('w=1600', 'w=1100')} alt="Wind turbines at sunset" loading="lazy" />
            <div className="commit__badge"><Leaf size={22} /> LEED · GRI · UN SDGs</div>
          </Reveal>
          <Reveal x={30} y={0}>
            <span className="eyebrow">Our commitment</span>
            <h2>Sustainability is a responsibility, <span className="text-sky">not a trend</span></h2>
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
                <SpotlightCard className="office-card">
                  <span className="office-card__flag" aria-hidden="true">{o.flag}</span>
                  {o.hq && <span className="chip chip--orange office-card__hq">Head office</span>}
                  <h3>{o.country}</h3>
                  <span className="office-card__city"><MapPin size={15} /> {o.city}</span>
                  <p>{o.address}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
