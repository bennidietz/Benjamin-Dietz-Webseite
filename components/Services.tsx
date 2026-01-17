
import React from 'react';

interface ServicesProps {
  t: any;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.items.map((item: any, i: number) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] hover:border-amber-500/30 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-amber-500 text-2xl font-bold">0{i + 1}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
