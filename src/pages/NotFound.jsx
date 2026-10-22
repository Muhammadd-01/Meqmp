import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MeridianMark from '../components/MeridianMark';

export default function NotFound() {
  return (
    <section className="section section--deep notfound">
      <div className="dot-grid" />
      <div className="container notfound__inner">
        <div className="notfound__mark"><MeridianMark /></div>
        <div>
          <span className="eyebrow">Error 404</span>
          <h1>This page is <span className="text-gradient">off the map</span></h1>
          <p className="lead">The page you're looking for has moved or no longer exists.</p>
          <Link to="/" className="btn btn--primary">Back to home <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
