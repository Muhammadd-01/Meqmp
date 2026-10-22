import { Stagger, StaggerItem } from './Reveal';

export default function ProcessSteps({ steps, dark = false }) {
  return (
    <Stagger className={`process ${dark ? 'process--dark' : ''} process--${steps.length > 4 ? 'many' : 'few'}`}>
      {steps.map((s, i) => (
        <StaggerItem key={s.title} className="process__step">
          <div className="process__num">
            <span>{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
