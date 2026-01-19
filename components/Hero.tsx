
import React from 'react';

import mainImg from '../assets/main.webp';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex flex-col justify-center px-6 pt-24 md:pt-20 overflow-hidden">
      {/* Optimized Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 text-left">
          <div className="reveal inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-white/10 glass text-amber-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            {t.badge}
          </div>
          
          <h1 className="reveal stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] mb-6 md:mb-8 gradient-text">
            {t.title}
          </h1>
          
          <p className="reveal stagger-2 text-lg md:text-xl lg:text-2xl text-white/60 font-light mb-8 md:mb-12 max-w-xl leading-relaxed">
            {t.subtitle}
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
            <a href="#contact" className="w-full sm:w-auto text-center accent-gradient text-black font-bold px-10 py-4 md:py-5 rounded-2xl text-lg hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              {t.cta}
            </a>
            <a href="#about" className="text-white/40 hover:text-white font-medium flex items-center gap-2 py-4 md:py-5 px-4 group">
              {t.scroll}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="reveal stagger-1 relative group w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
            {/* Decorative elements around image */}
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[2.5rem] md:rounded-[3rem] blur-2xl group-hover:bg-amber-500/20"></div>
            
            <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glass border-white/10 shadow-2xl">
              <img 
                src={mainImg} 
                alt="Benjamin Dietz"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Info Tag */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 glass px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-white/10 shadow-xl reveal stagger-3 hidden sm:block">
              <div className="text-[10px] md:text-xs font-bold text-amber-500 uppercase tracking-widest mb-0.5 md:mb-1">
                {t.location}
              </div>
              <div className="text-sm md:text-lg font-bold">Wuppertal, DE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
