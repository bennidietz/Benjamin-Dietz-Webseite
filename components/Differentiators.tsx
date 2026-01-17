
import React from 'react';

interface DifferentiatorsProps {
  t: any;
}

const Differentiators: React.FC<DifferentiatorsProps> = ({ t }) => {
  return (
    <section className="scroll-mt-32 bg-white/5 rounded-[3rem] p-12 md:p-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
        {t.items.map((item: any, i: number) => (
          <div key={i} className="flex gap-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full accent-gradient flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-white/50">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
