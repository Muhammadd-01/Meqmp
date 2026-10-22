import { Fragment } from 'react';
import { Reveal } from './Reveal';
import { SplitText } from './Motion';

export default function SectionHeading({ eyebrow, title, text, align = 'center', children, className = '', id, as = 'h2' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow" y={14}>
          {eyebrow}
        </Reveal>
      )}
      <SplitText as={as} id={id}>
        {title?.type === Fragment ? title.props.children : title}
      </SplitText>
      {text && (
        <Reveal as="p" className="lead" delay={0.15}>
          {text}
        </Reveal>
      )}
      {children}
    </div>
  );
}
