import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/inter';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/effects.css';
import './styles/dock.css';
import App from './App';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs). Hydrate only when the markup
// was rendered for this exact URL; otherwise (SPA fallback, dev) render fresh.
const route = container.dataset.route;
const here = window.location.pathname.replace(/\/+$/, '') || '/';
if (container.firstElementChild && route === here) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.textContent = '';
  ReactDOM.createRoot(container).render(app);
}
