import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, Globe2, Sparkles, X } from 'lucide-react';
import Icon from '../components/Icon';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import MeridianMark from '../components/MeridianMark';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ArticleCard from '../components/ArticleCard';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { clients, heroStats, howWeWork, industries, painPoints, photos, standards, valueProps, whyUs } from '../data/site';
import { pillars } from '../data/services';
import { articles } from '../data/content';

const ease = [0.22, 1, 0.36, 1];
const words = ['Quality.', 'Strategy.', 'Excellence.'];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="dot-grid" />
      <div className="glow glow--sky" style={{ width: 520, height: 520, top: -200, left: -160, opacity: 0.35 }} />
      <div className="glow glow--orange" style={{ width: 420, height: 420, bottom: -220, right: '20%', opacity: 0.28 }} />

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span className="hero__pill" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Sparkles size={15} /> Empowering quality &amp; sustainable growth
          </motion.span>

          <h1 className="hero__title">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className={i === 2 ? 'text-gradient' : ''}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.14, ease }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p className="hero__lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }}>
            Trusted advisory experts in strategic development and operational excellence — delivering advisory,
            training, compliance, sustainability and corporate wellbeing across the Middle East, Asia and North America.
          </motion.p>

          <motion.div className="hero__actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.75, ease }}>
            <Link to="/get-quote" className="btn btn--primary">Book a Free Consultation <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn--ghost">Explore Services</Link>
          </motion.div>

          <motion.ul className="hero__trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <li><BadgeCheck size={18} /> ISO 9001:2015 certified</li>
            <li><Globe2 size={18} /> 4 countries · 3 continents</li>
            <li><CheckCircle2 size={18} /> Since 2005</li>
          </motion.ul>
        </div>

        <div className="hero__visual">
          <motion.div className="hero__orb" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease }}>
            <MeridianMark />
          </motion.div>

          <motion.div
            className="float-card float-card--a"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ opacity: { delay: 1 }, x: { delay: 1, duration: 0.8, ease }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="float-card__icon"><BadgeCheck size={20} /></span>
            <span>
              <strong>IRCA Lead Auditors</strong>
              <em>Aramco &amp; NEOM approved</em>
            </span>
          </motion.div>

          <motion.div
            className="float-card float-card--b"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 1.2 }, x: { delay: 1.2, duration: 0.8, ease }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="float-card__big">1st</span>
            <span>
              <strong>TVTC foreign-registered</strong>
              <em>training centre in Saudi Arabia</em>
            </span>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <Stagger className="hero__stats" gap={0.1}>
          {heroStats.map((s) => (
            <StaggerItem key={s.label} className="hero__stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <Reveal className="clients__label">
          <span>Trusted by world-leading companies</span>
        </Reveal>
      </div>
      <Marquee items={clients.slice(0, 8)} />
      <div style={{ height: 14 }} />
      <Marquee items={clients.slice(8)} reverse />
    </section>
  );
}

function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="pillars__head">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title={<>Five pillars of <span className="text-sky">sustainable excellence</span></>}
            text="Integrated solutions for quality, health & safety, environment, food safety, sustainability, risk, change management, business continuity and corporate wellbeing."
          />
          <Reveal delay={0.1}>
            <Link to="/services" className="btn btn--outline">All services <ArrowRight size={18} /></Link>
          </Reveal>
        </div>

        <Stagger className="pillars">
          {pillars.map((p, i) => (
            <StaggerItem key={p.slug} className={`pillar pillar--${i}`}>
              <Link to={p.to} className="pillar__link">
                <img src={p.image.replace('w=1600', 'w=900')} alt="" loading="lazy" />
                <div className="pillar__shade" />
                <div className="pillar__body">
                  <span className="pillar__icon"><Icon name={p.icon} size={24} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <span className="pillar__more">Learn more <ArrowUpRight size={18} /></span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Problems() {
  const [solved, setSolved] = useState(false);
  return (
    <section className="section section--soft problems">
      <div className="container split">
        <Reveal>
          <span className="eyebrow">Problems that stop growth</span>
          <h2>Is your business facing these challenges?</h2>
          <p className="lead">
            Our ISO experts turn compliance pressure into a competitive advantage. Hover — or tap — and watch them disappear.
          </p>
          <ul className={`problems__list ${solved ? 'is-solved' : ''}`} onMouseEnter={() => setSolved(true)} onMouseLeave={() => setSolved(false)} onClick={() => setSolved((v) => !v)}>
            {painPoints.map((p, i) => (
              <li key={p} style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="problems__x"><X size={16} /></span>
                <span className="problems__check"><CheckCircle2 size={18} /></span>
                <span className="problems__text">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Stagger className="grid grid-2 values">
          {valueProps.map((v) => (
            <StaggerItem key={v.title}>
              <SpotlightCard className="value-card">
                <span className="icon-badge"><Icon name={v.icon} size={26} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="section">
      <div className="container split about-teaser">
        <Reveal className="about-teaser__media" x={-30} y={0}>
          <div className="about-teaser__img about-teaser__img--main">
            <img src={photos.boardroom.replace('w=1600', 'w=1000')} alt="Meridian consultants in a strategy session" loading="lazy" />
          </div>
          <div className="about-teaser__img about-teaser__img--small">
            <img src={photos.classroom.replace('w=1600', 'w=700')} alt="Meridian training session" loading="lazy" />
          </div>
          <motion.div className="about-teaser__badge" whileHover={{ rotate: -4, scale: 1.05 }}>
            <strong>20+</strong>
            <span>years of building<br />excellence</span>
          </motion.div>
        </Reveal>

        <Reveal x={30} y={0}>
          <span className="eyebrow">About Meridian</span>
          <h2>Together, we build <span className="text-sky">sustainable excellence</span></h2>
          <p className="lead">
            Since 2005, Meridian has grown from modest beginnings into a trusted partner for quality and compliance —
            an ISO 9001:2015 certified firm with offices in Saudi Arabia, Bahrain, Canada and Pakistan.
          </p>
          <ul className="check-list">
            {whyUs.map((w) => (
              <li key={w.title}>
                <span className="check-list__icon"><Icon name={w.icon} size={20} /></span>
                <span>
                  <strong>{w.title}</strong>
                  {w.text}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn--dark">Our story <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="section section--deep">
      <div className="dot-grid" />
      <div className="glow glow--orange" style={{ width: 400, height: 400, right: -120, top: -120, opacity: 0.25 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading eyebrow="How we work" title="We get it right the first time" text="A proven four-stage approach that takes you from first conversation to lasting, self-sustaining excellence." />
        <ProcessSteps steps={howWeWork} dark />
      </div>
    </section>
  );
}

function Standards() {
  const [active, setActive] = useState(0);
  const s = standards[active];
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Standards we deliver" title="Every framework your business needs" text="Gap assessments, implementation, internal audits and certification support across 15+ international standards." />
        <div className="standards">
          <Reveal className="standards__chips">
            {standards.map((st, i) => (
              <button key={st.code} className={`std-chip ${i === active ? 'is-active' : ''}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>
                {st.code}
              </button>
            ))}
          </Reveal>
          <Reveal className="standards__panel" delay={0.1}>
            <motion.div key={s.code} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
              <span className="standards__code">{s.code}</span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <Link to="/services/compliance" className="link-arrow">Explore compliance services <ArrowRight size={16} /></Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHeading eyebrow="Industries served" title="Deep expertise across 14 sectors" />
        <Stagger className="industries" gap={0.04}>
          {industries.map((ind) => (
            <StaggerItem key={ind} className="industry">
              {ind}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="section section--deep voices">
      <div className="dot-grid" />
      <div className="glow glow--sky" style={{ width: 500, height: 500, left: '30%', top: -300, opacity: 0.3 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading eyebrow="Client voices" title="What our clients and learners say" />
        <Testimonials />
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="section">
      <div className="container">
        <div className="pillars__head">
          <SectionHeading align="left" eyebrow="Insights" title="Latest articles" text="Practical perspectives on standards, sustainability and operational excellence." />
          <Reveal delay={0.1}>
            <Link to="/insights" className="btn btn--outline">All insights <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
        <Stagger className="grid grid-2">
          {articles.map((a) => (
            <StaggerItem key={a.slug}>
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Pillars />
      <Problems />
      <AboutTeaser />
      <HowWeWork />
      <Standards />
      <Industries />
      <Voices />
      <Insights />
      <CTASection />
    </>
  );
}

