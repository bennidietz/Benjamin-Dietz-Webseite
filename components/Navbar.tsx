
import React from 'react';
import { Language } from '../i18n';

import logoImg from '../assets/logo.svg';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, t }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-6 py-3 pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:inline">Benjamin Dietz</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white">{t.about}</a>
          <a href="#benefits" className="hover:text-white">{t.benefits}</a>
          <a href="#experience" className="hover:text-white">{t.experience}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 hover:border-white/30"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <a 
            href="#contact" 
            className="accent-gradient text-black text-sm font-bold px-5 py-2 rounded-xl"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
