import { Reveal } from './Reveal';

export default function SectionHeading({ eyebrow, title, text, align = 'center', children, className = '' }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
      {children}
    </Reveal>
  );
}
