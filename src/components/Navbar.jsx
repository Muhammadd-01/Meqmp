import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, GraduationCap, Mail, Menu, Phone, X } from 'lucide-react';
import { contact, nav } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSub(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));
  const servicesActive = pathname.startsWith('/services') || pathname.startsWith('/trainings');

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : 'nav--top'}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" aria-label="Meridian home">
            <img src="/images/logo-white.png" alt="Meridian Quality Management Professionals" />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div className="nav__item nav__item--has-menu" key={item.label}>
                  <NavLink to={item.to} className={`nav__link ${servicesActive ? 'is-active' : ''}`}>
                    {item.label} <ChevronDown size={15} className="nav__chev" />
                  </NavLink>
                  <div className="mega">
                    <div className="mega__inner">
                      <div className="mega__list">
                        {item.children.map((c) => (
                          <Link key={c.to} to={c.to} className="mega__link">
                            <span className="mega__title">{c.label}</span>
                            <span className="mega__desc">{c.desc}</span>
                            <ArrowRight size={16} className="mega__arrow" />
                          </Link>
                        ))}
                      </div>
                      <div className="mega__feature">
                        <span className="eyebrow">Free consultation</span>
                        <p>Not sure where to start? Talk to an IRCA-certified consultant about your goals.</p>
                        <Link to="/get-quote" className="btn btn--primary btn--sm">
                          Book a call <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={`nav__link ${isActive(item.to) ? 'is-active' : ''}`}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="nav__cta">
            <a href={contact.lms} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm nav__lms" title="Meridian Learning Management System">
              <GraduationCap size={16} /> LMS
            </a>
            <Link to="/get-quote" className="btn btn--primary btn--sm">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>

          <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              className="drawer__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            >
              <div className="drawer__head">
                <img src="/images/logo-white.png" alt="Meridian" />
                <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={26} /></button>
              </div>
              <nav className="drawer__nav">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {item.children ? (
                      <>
                        <button className="drawer__link" onClick={() => setMobileSub((v) => !v)}>
                          {item.label}
                          <ChevronDown size={20} style={{ transform: mobileSub ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                        </button>
                        <AnimatePresence>
                          {mobileSub && (
                            <motion.div
                              className="drawer__sub"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              <Link to="/services">All services</Link>
                              {item.children.map((c) => (
                                <Link key={c.to} to={c.to}>{c.label}</Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link to={item.to} className={`drawer__link ${isActive(item.to) ? 'is-active' : ''}`}>{item.label}</Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="drawer__foot">
                <Link to="/get-quote" className="btn btn--primary">Get a Quote <ArrowRight size={18} /></Link>
                <a href={contact.lms} target="_blank" rel="noreferrer" className="btn btn--ghost"><GraduationCap size={18} /> Meridian LMS <ArrowUpRight size={16} /></a>
                <a href={contact.phoneHref}><Phone size={16} /> {contact.phone}</a>
                <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
              </div>
            </motion.aside>
            <div className="drawer__scrim" onClick={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
