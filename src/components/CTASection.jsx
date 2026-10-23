import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { contact } from '../data/site';
import { Reveal } from './Reveal';
import MeridianMark from './MeridianMark';

export default function CTASection({
  title = 'Ready to build sustainable excellence?',
  text = 'Book a free consultation to assess where you are today and map your journey to certification, capability and growth.',
}) {
  return (
    <section className="section cta-wrap">
      <div className="container">
        <Reveal className="cta">
          <div className="dot-grid" />
          <div className="glow glow--gold" style={{ width: 300, height: 300, left: -80, bottom: -160, opacity: 0.4 }} />
          <MeridianMark className="cta__mark" />
          <div className="cta__content">
            <span className="eyebrow">Let's work together</span>
            <h2>{title}</h2>
            <p className="lead">{text}</p>
            <div className="cta__actions">
              <Link to="/get-quote" className="btn btn--primary">Book a Free Consultation <ArrowRight size={18} /></Link>
              <a href={contact.phoneHref} className="btn btn--ghost"><Phone size={18} /> {contact.phone}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
