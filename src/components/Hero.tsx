import { useLanguage } from '../context/LanguageContext';

const PLAY_URL = 'https://jogoal.com/PbChv1';

export default function Hero() {
  const { t, language } = useLanguage();
  
  return (
    <div className="relative bg-[#1a1a2e] text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-transparent">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2070&q=80"
          alt={language === 'en' ? 'Casino background' : 'Arrière-plan du casino'}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.bonus')}
            <span className="text-[#ffd700] block">{t('hero.amount')}</span>
          </h1>
          <p className="text-xl mb-8">{t('hero.insurance')}</p>
          <a 
            href={PLAY_URL}
            className="bg-[#ffd700] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#ffed4a] transition inline-block"
          >
            {t('hero.play')}
          </a>
        </div>
      </div>
    </div>
  );
}