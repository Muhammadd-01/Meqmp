import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export { renderHead } from './components/Seo';
export { staticRoutes, SITE_URL } from './data/seo';

export function render(url) {
  return renderToString(
    <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </StaticRouter>
  );
}
