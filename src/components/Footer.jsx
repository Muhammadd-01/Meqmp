import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { contact, offices } from '../data/site';
import { pillars } from '../data/services';

function SocialIcon({ name }) {
  const paths = {
    LinkedIn:
      'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zm7.5 0h4.4v1.9h.06c.62-1.17 2.12-2.4 4.37-2.4 4.67 0 5.53 3.07 5.53 7.07V22h-4.6v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.7V8z',
    Facebook:
      'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
    YouTube:
      'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z',
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="glow glow--orange" style={{ width: 380, height: 380, top: -200, right: -100, opacity: 0.18 }} />
      <div className="glow glow--sky" style={{ width: 420, height: 420, bottom: -260, left: -120, opacity: 0.25 }} />

      <div className="container">
        <div className="footer__cta">
          <div>
            <h3>Need to reach us?</h3>
            <p>We're here to answer all your questions and connect you with the people who can help.</p>
          </div>
          <div className="footer__cta-actions">
            <a href={contact.phoneHref} className="btn btn--ghost"><Phone size={18} /> {contact.phone}</a>
            <Link to="/contact" className="btn btn--primary">Contact Us <ArrowRight size={18} /></Link>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/logo-white.png" alt="Meridian Quality Management Professionals" />
            <p>
              Trusted advisory experts in strategic development and operational excellence — empowering quality &amp;
              sustainable growth across the Middle East, Asia and North America since 2005.
            </p>
            <div className="footer__social">
              {contact.social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {pillars.map((p) => (
                <li key={p.slug}><Link to={p.to}>{p.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/insights">News &amp; Articles</Link></li>
              <li><Link to="/verify-certificate">Verify Certificate</Link></li>
              <li><Link to="/get-quote">Request a Quote</Link></li>
              <li><a href={contact.lms} target="_blank" rel="noreferrer">Meridian LMS <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <p className="footer__small">Talk to a consultant about certification, training or a custom program.</p>
            <a href={contact.phoneHref} className="footer__contact"><Phone size={16} /> {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="footer__contact"><Mail size={16} /> {contact.email}</a>
            <Link to="/get-quote" className="link-arrow footer__quote">Request a proposal <ArrowRight size={16} /></Link>
          </div>
        </div>

        <div className="footer__offices">
          {offices.map((o) => (
            <div key={o.country} className="footer__office">
              <MapPin size={16} />
              <span><strong>{o.country}</strong> · {o.city}</span>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Meridian Quality Management Professionals. All rights reserved.</span>
          <span>Part of the Gulf Capital holding group</span>
        </div>
      </div>
    </footer>
  );
}
