
import BrandText from './BrandText';

interface BenefitsProps {
  t: any;
}

const Icons: Record<string, React.ReactNode> = {
  timer: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  shield: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  cpu: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  rocket: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
};

const Benefits: React.FC<BenefitsProps> = ({ t }) => {
  return (
    <section id="benefits" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.items.map((item: any, i: number) => (
          <div key={i} className="glass p-10 rounded-[2rem] hover:bg-white/5 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
              {Icons[item.icon]}
            </div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/50 leading-relaxed">
              <BrandText text={item.desc} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
