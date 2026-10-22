import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, HardHat, Search, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { contact, photos } from '../data/site';
import { accreditations, trainingCategories, trainings } from '../data/content';

const catIcon = {
  'Lead Auditor': Award,
  'Internal Auditor': ShieldCheck,
  'Leadership & Management': Briefcase,
  'Exam Preparation': BookOpen,
  'Safety & Environment': HardHat,
};

export default function Trainings() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return trainings.filter(
      (t) =>
        (cat === 'All' || t.category === cat) &&
        (!term || `${t.title} ${t.name} ${t.category}`.toLowerCase().includes(term))
    );
  }, [cat, q]);

  const count = (c) => (c === 'All' ? trainings.length : trainings.filter((t) => t.category === c).length);

  return (
    <>
      <PageHero
        eyebrow="Trainings"
        title="Build capability that lasts"
        highlight="capability"
        text="Practical, customised courses from internationally certified trainers — lead auditor, internal auditor, Lean Six Sigma, exam preparation and safety programs."
        image={photos.classroom}
        crumbs={[{ label: 'Services', to: '/services' }, { label: 'Trainings' }]}
      >
        <a href="#catalogue" className="btn btn--primary">Browse courses <ArrowRight size={18} /></a>
        <a href={contact.lms} target="_blank" rel="noreferrer" className="btn btn--ghost">Meridian LMS</a>
      </PageHero>

      <section className="accred">
        <div className="container accred__inner">
          <span className="accred__label">Accreditations &amp; registrations</span>
          <Stagger className="accred__list" gap={0.06}>
            {accreditations.map((a) => (
              <StaggerItem key={a} className="accred__item">
                <GraduationCap size={18} /> {a}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" id="catalogue">
        <div className="container">
          <SectionHeading eyebrow="Course catalogue" title="Find the right course for your team" text="In-house, public and virtual delivery across Saudi Arabia, Bahrain, Pakistan and online." />

          <Reveal className="filters">
            <div className="filters__tabs" role="tablist">
              {trainingCategories.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} className={`filter-tab ${cat === c ? 'is-active' : ''}`} onClick={() => setCat(c)}>
                  {cat === c && <motion.span layoutId="tab-pill" className="filter-tab__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span className="filter-tab__label">{c}</span>
                  <span className="filter-tab__count">{count(c)}</span>
                </button>
              ))}
            </div>
            <label className="filters__search">
              <Search size={18} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search courses…" aria-label="Search courses" />
            </label>
          </Reveal>

          <motion.div layout className="courses">
            <AnimatePresence mode="popLayout">
              {list.map((t) => {
                const I = catIcon[t.category];
                return (
                  <motion.article
                    layout
                    key={t.title}
                    className="course"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="course__top">
                      <span className="course__icon"><I size={22} /></span>
                      <span className="chip">{t.category}</span>
                    </div>
                    <h3>{t.title}</h3>
                    <p>{t.name}</p>
                    <Link to="/get-quote" state={{ service: 'Trainings', course: t.title }} className="link-arrow">
                      Enquire <ArrowRight size={16} />
                    </Link>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="center courses__empty">No courses match “{q}”. Try another search or contact us for a custom program.</p>}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <Reveal x={-30} y={0} className="detail-photo">
            <img src={photos.workshop.replace('w=1600', 'w=1100')} alt="Interactive workshop" loading="lazy" />
          </Reveal>
          <Reveal x={30} y={0}>
            <span className="eyebrow">Corporate programs</span>
            <h2>Training designed around <span className="text-sky">your people</span></h2>
            <p className="lead">
              Need something specific? We design bespoke programs — from Aramco Schedule Q awareness to executive
              quality leadership — delivered on-site, virtually or through our LMS.
            </p>
            <Link to="/get-quote" state={{ service: 'Trainings' }} className="btn btn--dark">Request a custom program <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <CTASection title="Upskill your workforce with Meridian" />
    </>
  );
}
