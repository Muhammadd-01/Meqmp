import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Stagger, StaggerItem } from './Reveal';

export default function FAQ({ items, title = 'Frequently asked questions', eyebrow = 'FAQ', text, soft = false }) {
  const [open, setOpen] = useState(0);
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq__intro">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} text={text} id="faq-title" />
        </div>
        <Stagger className="faq__list" gap={0.06}>
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq__q">{f.q}</span>
                    <span className="faq__icon"><Plus size={18} /></span>
                  </button>
                </h3>
                {/* Answers stay in the DOM (just collapsed) so crawlers can read them. */}
                <motion.div
                  id={`faq-${i}`}
                  className="faq__a"
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{f.a}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
