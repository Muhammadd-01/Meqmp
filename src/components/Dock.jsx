import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, ArrowUpRight, MessageCircle, Send, X } from 'lucide-react';
import { answer, quickReplies } from '../data/chatbot';

const ease = [0.22, 1, 0.36, 1];
const greeting = {
  from: 'bot',
  text: 'Hi there! 👋 I’m the Meridian assistant. How can I help you today?',
};

function Message({ m, onNavigate }) {
  return (
    <motion.div
      className={`chat__msg chat__msg--${m.from}`}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease }}
    >
      <p>{m.text}</p>
      {m.links && (
        <div className="chat__links">
          {m.links.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to} onClick={onNavigate}>{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {l.label} {l.href.startsWith('http') && <ArrowUpRight size={13} />}
              </a>
            )
          )}
        </div>
      )}
    </motion.div>
  );
}

function Chat({ open, setOpen }) {
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const ask = (text) => {
    const q = text.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { from: 'user', text: q }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...answer(q) }]);
      setTyping(false);
    }, 650 + Math.min(q.length * 12, 600));
  };

  return (
    <motion.section
      className="chat"
      role="dialog"
      aria-label="Meridian assistant"
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.94 }}
      transition={{ duration: 0.35, ease }}
    >
      <header className="chat__head">
        <span className="chat__avatar"><img src="/apple-touch-icon.png" alt="" /></span>
        <div>
          <strong>Meridian Assistant</strong>
          <em><span className="chat__online" /> Automated answers · instant</em>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={20} /></button>
      </header>

      <div className="chat__body" ref={listRef} aria-live="polite">
        {messages.map((m, i) => (
          <Message key={i} m={m} onNavigate={() => setOpen(false)} />
        ))}
        {messages.length === 1 && (
          <motion.div className="chat__quick" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {quickReplies.map((q) => (
              <button key={q} onClick={() => ask(q)}>{q}</button>
            ))}
          </motion.div>
        )}
        {typing && (
          <div className="chat__msg chat__msg--bot chat__typing" aria-label="Assistant is typing">
            <span /><span /><span />
          </div>
        )}
      </div>

      <form
        className="chat__form"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          aria-label="Your question"
          maxLength={300}
        />
        <button type="submit" aria-label="Send" disabled={!input.trim() || typing}><Send size={18} /></button>
      </form>
    </motion.section>
  );
}

// Bottom-right floating dock: chat launcher always visible; the back-to-top button
// appears after scrolling and the launcher lifts to make room for it.
export default function Dock() {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(() => setHint(true), 5000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (open) setHint(false);
  }, [open]);

  return (
    <div className={`dock ${showTop ? 'is-lifted' : ''}`}>
      <AnimatePresence>{open && <Chat open={open} setOpen={setOpen} />}</AnimatePresence>

      <motion.div
        className="dock__chat"
        animate={{ y: showTop ? -66 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        <AnimatePresence>
          {hint && !open && (
            <motion.button
              className="dock__hint"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, x: 16, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.9 }}
              transition={{ duration: 0.35, ease }}
            >
              Need help? Ask me anything
              <span
                role="button"
                tabIndex={0}
                aria-label="Dismiss"
                className="dock__hint-x"
                onClick={(e) => {
                  e.stopPropagation();
                  setHint(false);
                }}
              >
                <X size={12} />
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          className={`dock__launcher ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open chat assistant'}
          aria-expanded={open}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'x' : 'chat'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.span>
          </AnimatePresence>
          {!open && <span className="dock__pulse" aria-hidden="true" />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="to-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
          >
            <svg className="to-top__ring" viewBox="0 0 56 56" aria-hidden="true">
              <circle cx="28" cy="28" r="25" className="to-top__track" />
              <motion.circle cx="28" cy="28" r="25" className="to-top__bar" style={{ pathLength: progress }} />
            </svg>
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
