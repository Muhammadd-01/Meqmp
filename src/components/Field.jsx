import { contact } from '../data/site';

export function Field({ label, as = 'input', children, ...rest }) {
  const Tag = as;
  return (
    <label className="field">
      <span>{label}</span>
      {as === 'select' ? <select {...rest}>{children}</select> : <Tag {...rest} />}
    </label>
  );
}

// Forms have no backend yet: hand the enquiry to the visitor's mail client, addressed to Meridian.
export function sendEnquiry(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
