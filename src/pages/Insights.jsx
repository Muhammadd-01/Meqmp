import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { photos, srcSet } from '../data/site';
import { articles } from '../data/content';

export default function Insights() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="News & Articles"
        title="Insights for quality leaders"
        highlight="Insights"
        text="Perspectives on standards, sustainability, risk and operational excellence from Meridian's consultants."
        image={photos.analytics}
        crumbs={[{ label: 'Insights' }]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <Link to={`/insights/${featured.slug}`} className="featured">
              <div className="featured__media">
                <img src={featured.image.replace('w=1600', 'w=1200')} srcSet={srcSet(featured.image, [480, 768, 1080, 1440])} sizes="(max-width: 900px) 92vw, 55vw" alt={featured.title} />
              </div>
              <div className="featured__body">
                <span className="chip chip--gold">Featured · {featured.category}</span>
                <h2>{featured.title}</h2>
                <p className="lead">{featured.excerpt}</p>
                <span className="featured__meta"><Calendar size={15} /> {featured.date} <Clock size={15} /> {featured.readTime}</span>
                <span className="btn btn--dark">Read article <ArrowRight size={18} /></span>
              </div>
            </Link>
          </Reveal>

          {rest.length > 0 && (
            <>
              <SectionHeading eyebrow="More reading" title="Latest articles" className="mt-xl" />
              <Stagger className="grid grid-2">
                {rest.map((a) => (
                  <StaggerItem key={a.slug}>
                    <ArticleCard article={a} />
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          )}
        </div>
      </section>

      <CTASection title="Have a question about a standard?" text="Our consultants are happy to talk through your situation — no obligation." />
    </>
  );
}

export function Article() {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/insights" replace />;
  const more = articles.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={a.category}
        title={a.title}
        image={a.image}
        crumbs={[{ label: 'Insights', to: '/insights' }, { label: a.category }]}
      >
        <span className="article-meta"><Calendar size={16} /> {a.date} · <Clock size={16} /> {a.readTime} · By Meridian</span>
      </PageHero>

      <section className="section">
        <div className="container article">
          <motion.div className="article__body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="article__lead">{a.excerpt}</p>
            {a.body.map((p, i) => <p key={i}>{p}</p>)}
            <Link to="/insights" className="link-arrow"><ArrowLeft size={16} /> Back to insights</Link>
          </motion.div>

          <aside className="article__aside">
            <div className="article__card">
              <h4>Talk to a consultant</h4>
              <p>Get practical advice on applying this to your organisation.</p>
              <Link to="/get-quote" className="btn btn--primary btn--sm">Book a call <ArrowRight size={16} /></Link>
            </div>
            {more.map((m) => (
              <Link key={m.slug} to={`/insights/${m.slug}`} className="article__more">
                <img src={m.image.replace('w=1600', 'w=300')} alt="" />
                <span>{m.title}</span>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
