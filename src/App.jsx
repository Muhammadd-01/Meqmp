import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BackToTop, ScrollProgress, ScrollToTop } from './components/Chrome';
import { Cursor, PageCurtain } from './components/Effects';
import Seo from './components/Seo';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Trainings from './pages/Trainings';
import Insights, { Article } from './pages/Insights';
import VerifyCertificate from './pages/VerifyCertificate';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';

// The first page paints immediately (it's prerendered); later navigations fade in.
let firstPage = true;

function Page({ children }) {
  const initial = firstPage ? false : { opacity: 0, y: 12 };
  useEffect(() => {
    firstPage = false;
  }, []);
  return (
    <motion.main
      id="main"
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <Seo />
      <ScrollProgress />
      <ScrollToTop />
      <PageCurtain />
      <Cursor />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/services" element={<Page><Services /></Page>} />
        <Route path="/services/:slug" element={<Page><ServiceDetail /></Page>} />
        <Route path="/trainings" element={<Page><Trainings /></Page>} />
        <Route path="/insights" element={<Page><Insights /></Page>} />
        <Route path="/insights/:slug" element={<Page><Article /></Page>} />
        <Route path="/verify-certificate" element={<Page><VerifyCertificate /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/get-quote" element={<Page><GetQuote /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}
