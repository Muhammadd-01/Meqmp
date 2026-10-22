import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProcessSteps from '../components/ProcessSteps';
import Marquee from '../components/Marquee';
import Icon from '../components/Icon';
import CTASection from '../components/CTASection';
import { Reveal } from '../components/Reveal';
import { clients, howWeWork, photos } from '../data/site';
import { pillars, serviceDetails } from '../data/services';
import { trainingCategories } from '../data/content';

const highlights = {
  advisory: serviceDetails.advisory.groups[0].items.map((i) => i.title),
  compliance: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'API Q1/Q2', 'ISO 42001'],
  sustainability: serviceDetails.sustainability.groups[0].items.slice(0, 6).map((i) => i.title),
  trainings: trainingCategories.slice(1),
  'corporate-wellbeing': serviceDetails['corporate-wellbeing'].groups[0].items.slice(0, 6).map((i) => i.title),
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Integrated solutions for every stage of excellence"
        highlight="every stage"
        text="Quality, health & safety, environment, food safety, sustainability, risk, change management, business continuity and corporate wellbeing — delivered by one accountable partner."
        image={photos.office}
        crumbs={[{ label: 'Services' }]}
      >
        <Link to="/get-quote" className="btn btn--primary">Get a Proposal <ArrowRight size={18} /></Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Five disciplines. One standard of excellence." />
          <div className="service-rows">
            {pillars.map((p, i) => (
              <div key={p.slug} className={`service-row ${i % 2 ? 'service-row--flip' : ''}`}>
                <Reveal className="service-row__media" x={i % 2 ? 40 : -40} y={0}>
                  <img src={p.image.replace('w=1600', 'w=1100')} alt="" loading="lazy" />
                  <span className="service-row__num">{String(i + 1).padStart(2, '0')}</span>
                </Reveal>
                <Reveal className="service-row__body" x={i % 2 ? -40 : 40} y={0} delay={0.1}>
                  <span className="icon-badge"><Icon name={p.icon} size={26} /></span>
                  <h2>{p.title}</h2>
                  <p className="lead">{p.short}</p>
                  <div className="service-row__chips">
                    {highlights[p.slug].map((h) => <span key={h} className="chip">{h}</span>)}
                  </div>
                  <Link to={p.to} className="btn btn--dark">Explore {p.title} <ArrowRight size={18} /></Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="dot-grid" />
        <div className="container" style={{ position: 'relative' }}>
          <SectionHeading eyebrow="How we work" title="We get it right the first time" />
          <ProcessSteps steps={howWeWork} dark />
        </div>
      </section>

      <section className="clients clients--plain">
        <div className="container">
          <Reveal className="clients__label"><span>Trusted by world-leading companies</span></Reveal>
        </div>
        <Marquee items={clients} />
      </section>

      <CTASection title="Ready to work with us?" />
    </>
  );
}
