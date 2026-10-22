export default function Marquee({ items, reverse = false }) {
  const list = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {list.map((name, i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= items.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
