
import BrandText from './BrandText';

interface PitchProps {
  t: any;
}

const Pitch: React.FC<PitchProps> = ({ t }) => {
  return (
    <section id="about" className="relative scroll-mt-32">
      <div className="max-w-4xl">
        <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-6">
          {t.title}
        </h2>
        <div className="text-3xl md:text-5xl font-semibold leading-snug">
          {t.text.split('. ').map((part: string, i: number) => (
            <span key={i} className={i % 2 === 0 ? 'text-white' : 'text-white/40'}>
              <BrandText text={part} />{i < t.text.split('. ').length - 1 ? '. ' : ''}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pitch;
