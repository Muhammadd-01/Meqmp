import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import ProcessSteps from '../components/ProcessSteps';
import Counter from '../components/Counter';
import Icon from '../components/Icon';
import CTASection from '../components/CTASection';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { standards } from '../data/site';
import { pillars, serviceDetails } from '../data/services';

function StandardsAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {standards.map((s, i) => (
        <div key={s.code} className={`accordion__item ${open === i ? 'is-open' : ''}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span className="accordion__code">{s.code}</span>
            <span className="accordion__name">{s.name}</span>
            <ChevronDown size={20} className="accordion__chev" />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                className="accordion__panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>{s.text} Gap assessment, implementation, internal audit and certification support.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const d = serviceDetails[slug];
  if (!d) return <Navigate to="/services" replace />;
  const others = pillars.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={d.tagline}
        title={d.title}
        highlight={d.highlight}
        text={d.intro}
        image={d.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: d.eyebrow }]}
      >
        <Link to="/get-quote" className="btn btn--primary">Book a Free Consultation <ArrowRight size={18} /></Link>
        <a href="#offer" className="btn btn--ghost">What's included</a>
      </PageHero>

      {/* Insight band */}
      <section className="insight-band">
        <div className="container insight-band__inner">
          <Reveal className="insight-band__stat">
            <strong><Counter value={Number(d.insight.value)} suffix={d.insight.suffix} /></strong>
          </Reveal>
          <Reveal className="insight-band__text" delay={0.1}>
            <p>{d.insight.text}</p>
          </Reveal>
          <Reveal className="insight-band__icon" delay={0.2}>
            <Icon name={d.icon} size={40} strokeWidth={1.4} />
          </Reveal>
        </div>
      </section>

      {/* Offer groups */}
      <div id="offer">
        {d.groups.map((g, gi) => (
          <section key={g.title} className={`section ${gi % 2 ? 'section--soft' : ''}`}>
            <div className="container">
              <SectionHeading eyebrow={d.eyebrow} title={g.title} text={g.text} />
              <Stagger className={`grid grid-${{ 8: 4, 10: 5 }[g.items.length] || 3}`} gap={0.05}>
                {g.items.map((it, i) => (
                  <StaggerItem key={it.title}>
                    <SpotlightCard className="offer-card">
                      <span className="offer-card__num">{String(i + 1).padStart(2, '0')}</span>
                      <h3>{it.title}</h3>
                      <p>{it.text}</p>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        ))}
      </div>

      {/* Standards */}
      {d.showStandards && (
        <section className="section section--soft">
          <div className="container split split--top">
            <Reveal>
              <span className="eyebrow">International standards</span>
              <h2>Certification frameworks we deliver</h2>
              <p className="lead">
                Guidance to achieve and maintain global certifications — from gap assessment through implementation,
                internal audit and certification.
              </p>
              <Link to="/trainings" className="link-arrow">See related auditor trainings <ArrowRight size={16} /></Link>
            </Reveal>
            <Reveal delay={0.1}>
              <StandardsAccordion />
            </Reveal>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section section--deep">
        <div className="dot-grid" />
        <div className="glow glow--orange" style={{ width: 380, height: 380, right: -120, bottom: -180, opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionHeading eyebrow="Our approach" title="A clear roadmap to transformation" />
          <ProcessSteps steps={d.process} dark />
        </div>
      </section>

      {/* Benefits & why */}
      <section className="section">
        <div className="container split split--top">
          <Reveal>
            <span className="eyebrow">Business benefits</span>
            <h2>What you <span className="text-sky">gain</span></h2>
            <ul className="benefits">
              {d.benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <span><Check size={16} strokeWidth={3} /></span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </Reveal>
          {d.why && (
            <Stagger className="grid grid-2">
              {d.why.map((w) => (
                <StaggerItem key={w.title}>
                  <SpotlightCard className="why-mini">
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </Stagger>
          )}
          {!d.why && (
            <Reveal className="detail-photo">
              <img src={d.image.replace('w=1600', 'w=1000')} alt="" loading="lazy" />
            </Reveal>
          )}
        </div>
      </section>

      {/* Other services */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title="Other ways we can help" />
          <Stagger className="grid grid-4">
            {others.map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={p.to} className="other-card">
                  <img src={p.image.replace('w=1600', 'w=700')} alt="" loading="lazy" />
                  <div className="other-card__shade" />
                  <span className="other-card__icon"><Icon name={p.icon} size={22} /></span>
                  <strong>{p.title}</strong>
                  <ArrowRight size={18} className="other-card__arrow" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection title={`Start your ${d.eyebrow.toLowerCase()} journey`} />
    </>
  );
}
