import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { Field, sendEnquiry } from '../components/Field';
import { Reveal } from '../components/Reveal';
import { contact, photos } from '../data/site';
import { pillars } from '../data/services';

const stepsMeta = ['Service', 'Details', 'Contact'];
const sizes = ['1–50', '51–250', '251–1,000', '1,000+'];
const timelines = ['As soon as possible', 'Within 3 months', '3–6 months', 'Just exploring'];

export default function GetQuote() {
  const { state } = useLocation();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [f, setF] = useState({
    service: state?.service || '',
    detail: state?.course || '',
    size: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
  });
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const canNext = step === 0 ? !!f.service : step === 1 ? !!f.size && !!f.timeline : true;

  const submit = (e) => {
    e.preventDefault();
    if (step < 2) {
      if (canNext) setStep(step + 1);
      return;
    }
    sendEnquiry(`Quote request — ${f.service}`, {
      Service: f.service,
      Details: f.detail,
      'Company size': f.size,
      Timeline: f.timeline,
      Name: f.name,
      Email: f.email,
      Phone: f.phone,
      Company: f.company,
      Country: f.country,
    });
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Let's scope your next step to excellence"
        highlight="excellence"
        text="Three quick steps. A consultant will come back with a tailored proposal — usually within one business day."
        image={photos.team}
        crumbs={[{ label: 'Get a Quote' }]}
      />

      <section className="section quote">
        <div className="container">
          <Reveal className="quote__card">
            <div className="quote__progress">
              {stepsMeta.map((s, i) => (
                <div key={s} className={`quote__pstep ${i <= step ? 'is-done' : ''} ${i === step ? 'is-current' : ''}`}>
                  <span>{i < step ? <Check size={16} strokeWidth={3} /> : i + 1}</span>
                  <em>{s}</em>
                </div>
              ))}
              <div className="quote__bar"><motion.div animate={{ width: `${(step / 2) * 100}%` }} transition={{ duration: 0.5 }} /></div>
            </div>

            {done ? (
              <motion.div className="form-done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={48} />
                <h3>Your request is ready to send</h3>
                <p>We've opened your email app with the details addressed to {contact.email}. Send it and a consultant will be in touch shortly.</p>
                <button className="btn btn--outline btn--sm" onClick={() => setDone(false)}>Back to form</button>
              </motion.div>
            ) : (
              <form onSubmit={submit}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {step === 0 && (
                      <>
                        <h2>Which service are you interested in?</h2>
                        <div className="choice-grid">
                          {pillars.map((p) => (
                            <button type="button" key={p.slug} className={`choice ${f.service === p.title ? 'is-active' : ''}`} onClick={() => set('service', p.title)}>
                              <span className="choice__icon"><Icon name={p.icon} size={24} /></span>
                              <strong>{p.title}</strong>
                              <span className="choice__tick"><Check size={14} strokeWidth={3} /></span>
                            </button>
                          ))}
                          <button type="button" className={`choice ${f.service === 'Not sure yet' ? 'is-active' : ''}`} onClick={() => set('service', 'Not sure yet')}>
                            <span className="choice__icon"><Icon name="HelpCircle" size={24} /></span>
                            <strong>Not sure yet</strong>
                            <span className="choice__tick"><Check size={14} strokeWidth={3} /></span>
                          </button>
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        <h2>Tell us a little more</h2>
                        <Field label="Standard, course or challenge (optional)" value={f.detail} onChange={(e) => set('detail', e.target.value)} placeholder="e.g. ISO 45001 certification for 3 sites" />
                        <p className="quote__label">Organisation size</p>
                        <div className="pill-group">
                          {sizes.map((s) => (
                            <button type="button" key={s} className={`pill ${f.size === s ? 'is-active' : ''}`} onClick={() => set('size', s)}>{s}</button>
                          ))}
                        </div>
                        <p className="quote__label">Timeline</p>
                        <div className="pill-group">
                          {timelines.map((s) => (
                            <button type="button" key={s} className={`pill ${f.timeline === s ? 'is-active' : ''}`} onClick={() => set('timeline', s)}>{s}</button>
                          ))}
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <h2>Where should we send your proposal?</h2>
                        <div className="form__row">
                          <Field label="Full name *" value={f.name} onChange={(e) => set('name', e.target.value)} required />
                          <Field label="Work email *" type="email" value={f.email} onChange={(e) => set('email', e.target.value)} required />
                        </div>
                        <div className="form__row">
                          <Field label="Phone" type="tel" value={f.phone} onChange={(e) => set('phone', e.target.value)} />
                          <Field label="Company *" value={f.company} onChange={(e) => set('company', e.target.value)} required />
                        </div>
                        <Field label="Country" as="select" value={f.country} onChange={(e) => set('country', e.target.value)}>
                          <option value="">Select…</option>
                          {['Saudi Arabia', 'Bahrain', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Pakistan', 'Canada', 'Other'].map((c) => <option key={c}>{c}</option>)}
                        </Field>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="quote__nav">
                  {step > 0 ? (
                    <button type="button" className="btn btn--outline" onClick={() => setStep(step - 1)}><ArrowLeft size={18} /> Back</button>
                  ) : <span />}
                  <button type="submit" className="btn btn--primary" disabled={!canNext}>
                    {step < 2 ? 'Continue' : 'Send request'} <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
