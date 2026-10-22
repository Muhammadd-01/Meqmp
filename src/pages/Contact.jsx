import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';
import { Field, sendEnquiry } from '../components/Field';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { contact, offices, photos } from '../data/site';

const quick = [
  { icon: Phone, label: 'Call us', value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: 'Need support', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: 'Head office', value: 'Dammam, Saudi Arabia', href: '#locations' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    sendEnquiry(`Website enquiry from ${form.name}`, {
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      Company: form.company,
      Message: form.message,
    });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        highlight="hear from you"
        text="Questions about certification, training or a custom program? Our team will connect you with the right consultant."
        image={photos.success}
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="quick-contact">
        <div className="container">
          <Stagger className="grid grid-3">
            {quick.map(({ icon: I, label, value, href }) => (
              <StaggerItem key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="quick-card">
                  <span className="quick-card__icon"><I size={22} /></span>
                  <span>
                    <em>{label}</em>
                    <strong>{value}</strong>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="form-card">
            <span className="eyebrow">Contact us</span>
            <h2>Send us a message</h2>
            <p>Fill out the form below and someone from our team will be in touch.</p>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="done" className="form-done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <CheckCircle2 size={44} />
                  <h3>Your email is ready to send</h3>
                  <p>We've opened your email app with the message addressed to {contact.email}. Hit send and we'll reply within one business day.</p>
                  <button className="btn btn--outline btn--sm" onClick={() => setSent(false)}>Edit message</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="form" exit={{ opacity: 0 }}>
                  <div className="form__row">
                    <Field label="Full name *" value={form.name} onChange={set('name')} required placeholder="Your name" />
                    <Field label="Work email *" type="email" value={form.email} onChange={set('email')} required placeholder="you@company.com" />
                  </div>
                  <div className="form__row">
                    <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+966 …" />
                    <Field label="Company" value={form.company} onChange={set('company')} placeholder="Organisation" />
                  </div>
                  <Field label="How can we help? *" as="textarea" rows={5} value={form.message} onChange={set('message')} required placeholder="Tell us about your goals…" />
                  <button className="btn btn--primary" type="submit">Send message <Send size={18} /></button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal className="contact-side" delay={0.1}>
            <div className="contact-side__img">
              <img src={photos.meeting.replace('w=1600', 'w=900')} alt="Meridian team meeting" loading="lazy" />
            </div>
            <div className="contact-side__note">
              <strong>Free strategy call</strong>
              <p>Not sure where to start? Book a no-obligation call and we'll map your fastest route to certification.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="locations">
        <div className="container">
          <SectionHeading eyebrow="Our global locations" title="Find an office near you" />
          <Stagger className="grid grid-4">
            {offices.map((o) => (
              <StaggerItem key={o.country}>
                <SpotlightCard className="office-card">
                  <span className="office-card__flag" aria-hidden="true">{o.flag}</span>
                  {o.hq && <span className="chip chip--orange office-card__hq">Head office</span>}
                  <h3>{o.country}</h3>
                  <span className="office-card__city"><MapPin size={15} /> {o.city}</span>
                  <p>{o.address}</p>
                  {o.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="office-card__phone"><Phone size={14} /> {p}</a>
                  ))}
                  <a href={`mailto:${contact.email}`} className="office-card__phone"><Mail size={14} /> {contact.email}</a>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
