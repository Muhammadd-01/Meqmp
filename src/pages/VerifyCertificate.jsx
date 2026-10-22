import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, FileCheck2, Info, Loader2, Mail, QrCode, ScanLine, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { contact, photos } from '../data/site';

const steps = [
  { icon: ScanLine, title: 'Find your code', text: 'The unique certificate code is printed on every Meridian certificate.' },
  { icon: QrCode, title: 'Enter it below', text: 'Type the code exactly as shown, including letters and dashes.' },
  { icon: ShieldCheck, title: 'Confirm authenticity', text: 'We confirm the holder, course and date of issue.' },
];

export default function VerifyCertificate() {
  const [code, setCode] = useState('');
  const [state, setState] = useState('idle');

  // The live certificate registry is not connected yet; route the request to the team by email.
  const submit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setState('loading');
    setTimeout(() => setState('pending'), 900);
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Certificate verification request')}&body=${encodeURIComponent(
    `Please verify certificate code: ${code.trim()}`
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Verify Certificate"
        title="Check a Meridian certificate in seconds"
        highlight="in seconds"
        text="Employers, auditors and learners can confirm the authenticity of any certificate issued by Meridian."
        image={photos.lab}
        crumbs={[{ label: 'Verify Certificate' }]}
      />

      <section className="section verify">
        <div className="container verify__grid">
          <Reveal className="verify__card">
            <span className="verify__icon"><FileCheck2 size={30} /></span>
            <h2>Enter certificate code for verification</h2>
            <form onSubmit={submit} className="verify__form">
              <label className="field">
                <span>Certificate code</span>
                <input
                  value={code}
                  onChange={(e) => { setCode(e.target.value.toUpperCase()); setState('idle'); }}
                  placeholder="e.g. MQMP-2026-000123"
                  required
                  autoComplete="off"
                />
              </label>
              <button className="btn btn--primary" disabled={state === 'loading'}>
                {state === 'loading' ? <Loader2 size={18} className="spin" /> : <ShieldCheck size={18} />}
                Verify certificate
              </button>
            </form>

            <AnimatePresence>
              {state === 'pending' && (
                <motion.div className="verify__result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <Info size={20} />
                  <div>
                    <strong>Send this code to our verification team</strong>
                    <p>We'll confirm the holder, course and issue date by email, usually within one business day.</p>
                    <a href={mailto} className="link-arrow"><Mail size={16} /> Email {contact.email}</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          <Stagger className="verify__steps">
            {steps.map(({ icon: I, title, text }, i) => (
              <StaggerItem key={title} className="verify__step">
                <span className="verify__step-num">{i + 1}</span>
                <span className="verify__step-icon"><I size={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="verify__help">
              Can't find your code? <Link to="/contact" className="link-arrow">Contact us <ArrowRight size={16} /></Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
