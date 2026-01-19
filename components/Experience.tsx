
import BrandText from './BrandText';

interface ExperienceProps {
  t: any;
}

const Experience: React.FC<ExperienceProps> = ({ t }) => {
  return (
    <section id="experience" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {t.items.map((item: any, i: number) => {
          const content = (
            <div className={`group glass p-8 rounded-3xl flex items-center justify-between border-transparent ${item.url ? 'hover:bg-white/5 hover:border-amber-500/20 cursor-pointer' : ''}`}>
              <div className="flex items-center gap-6">
                 <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
                 <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xl md:text-2xl font-bold text-white ${item.url ? 'group-hover:text-amber-500' : ''}`}>
                        <BrandText text={item.company} />
                      </span>
                      {item.isFounder && (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-500 text-black px-2.5 py-1 rounded-md shadow-lg">
                          Founder
                        </span>
                      )}
                    </div>
                    <div className="text-white/50 text-sm md:text-base mt-1 font-medium">{item.role}</div>
                 </div>
              </div>
              {item.url && (
                <div className="hidden md:block">
                  <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          );

          if (item.url) {
            return (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                {content}
              </a>
            );
          }

          return <div key={i}>{content}</div>;
        })}
      </div>
    </section>
  );
};

export default Experience;
