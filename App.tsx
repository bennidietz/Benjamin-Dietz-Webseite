
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { translations, Language } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pitch from './components/Pitch';
import Benefits from './components/Benefits';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Simple hook for scroll-triggered animations
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('de');
  const [showImpressum, setShowImpressum] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en' || browserLang === 'de') {
      setLang(browserLang as Language);
    } else {
      setLang('de'); 
    }
  }, []);

  const t = useMemo(() => translations[lang], [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'de' ? 'en' : 'de');
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-amber-500 selection:text-black">
      <Navbar lang={lang} toggleLang={toggleLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        
        <div className="max-w-7xl mx-auto px-6 space-y-48 py-32">
          <Pitch t={t.pitch} />
          <Benefits t={t.benefits} />
          <Experience t={t.experience} />
          <Skills t={t.skills} />
          <Contact t={t.contact} />
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40 text-sm gap-4">
          <p>© {new Date().getFullYear()} Benjamin Dietz. All rights reserved.</p>
          <div className="flex gap-8">
            <button 
              onClick={() => setShowImpressum(true)} 
              className="hover:text-white transition-colors"
            >
              {t.legal.impressum}
            </button>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
          <div className="glass p-10 md:p-14 rounded-[2.5rem] max-w-2xl w-full relative shadow-2xl">
            <button 
              onClick={() => setShowImpressum(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold mb-8 text-amber-500">{t.legal.impressum}</h2>
            <div className="space-y-6 text-white/80 leading-relaxed text-lg">
              <p className="whitespace-pre-line">{t.legal.address}</p>
              <div className="space-y-2">
                <p>Web: <a href="https://benjamin-dietz.com" className="text-amber-500 underline underline-offset-4">benjamin-dietz.com</a></p>
                <p>Email: <a href={`mailto:${t.contact.email}`} className="text-amber-500 underline underline-offset-4">{t.contact.email}</a></p>
              </div>
              <div className="pt-8 border-t border-white/10 text-sm opacity-60">
                {t.legal.disclaimer}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
