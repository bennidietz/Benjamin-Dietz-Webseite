
import BrandText from './BrandText';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${t.email}?subject=Projektanfrage`;
  };

  return (
    <section id="contact" className="scroll-mt-32 py-20">
      <div className="accent-gradient p-1 md:p-1.5 rounded-[3rem]">
        <div className="bg-[#0a0a0a] rounded-[2.8rem] p-12 md:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-500/20 blur-[120px] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-7xl font-extrabold mb-8 relative z-10">{t.title}</h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-xl mx-auto font-light relative z-10">{t.subtitle}</p>
          
          <div className="relative z-10">
            <button 
              onClick={handleEmailClick}
              className="bg-white text-black font-bold px-12 py-6 rounded-2xl text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto group shadow-2xl"
            >
              {t.button}
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-white/30 text-sm font-medium uppercase tracking-widest relative z-10">
            <a 
              href="https://www.linkedin.com/in/benjamin-dietz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://21-vision.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              Agency (<BrandText text="21vision" />)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
