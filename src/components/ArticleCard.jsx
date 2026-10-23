import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArticleCard({ article: a }) {
  return (
    <Link to={`/insights/${a.slug}`} className="article-card">
      <div className="article-card__media">
        <img src={a.image.replace('w=1600', 'w=900')} alt="" loading="lazy" />
        <span className="chip chip--gold">{a.category}</span>
      </div>
      <div className="article-card__body">
        <span className="article-card__meta">{a.date} · {a.readTime}</span>
        <h3>{a.title}</h3>
        <p>{a.excerpt}</p>
        <span className="link-arrow">Read article <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}
