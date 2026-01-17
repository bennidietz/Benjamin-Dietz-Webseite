
import React from 'react';

interface SkillsProps {
  t: any;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section className="scroll-mt-32 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="reveal">
          <h2 className="text-4xl font-bold mb-14">{t.title}</h2>
          <div className="space-y-12">
            {t.categories.map((cat: any, i: number) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex justify-between mb-4 text-base font-bold tracking-tight uppercase">
                  <span className="text-white/80">{cat.name}</span>
                  <span className="text-amber-500 tracking-widest">{cat.level/10}/10</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full accent-gradient transition-all duration-1000 ease-out"
                    style={{ width: `${cat.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center reveal stagger-2">
          <h2 className="text-2xl font-bold mb-10 opacity-40 uppercase tracking-[0.2em] text-sm">Integrated Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {t.tags.map((tag: string, i: number) => (
              <span key={i} className="px-5 py-3 rounded-2xl glass text-xs hover:border-amber-500/50 hover:text-amber-500 transition-all cursor-default font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-14 p-10 glass rounded-[2.5rem] border-amber-500/10 bg-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.983 21L3.983 18C3.983 16.8954 4.87843 16 5.983 16H8.983C9.53528 16 9.983 15.5523 9.983 15V9C9.983 8.44772 9.53528 8 8.983 8H5.983C4.87843 8 3.983 7.10457 3.983 6V3L11.983 3V15C11.983 18.3137 9.29722 21 5.983 21H3.983Z"></path></svg>
            </div>
            <p className="italic text-white/70 text-xl leading-relaxed font-light">
              "Ich verstehe mich nicht nur als Fullstack-Entwickler, sondern auch als Mitdenker. In einer Welt, in der Software und KI verschmelzen, konzipiere ich strategisch durchdachte Lösungen, die technologische Grenzen überschreiten."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
