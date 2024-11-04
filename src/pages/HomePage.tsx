import Hero from '../components/Hero';
import GameGrid from '../components/GameGrid';
import About from '../components/About';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

interface HomePageProps {
  language: 'fr' | 'en';
}

export default function HomePage({ language }: HomePageProps) {
  const { setLanguage } = useLanguage();
  const baseUrl = 'https://majestic-slots-casino.com';
  const currentUrl = language === 'en' ? `${baseUrl}/` : `${baseUrl}/fr/`;

  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{language === 'en' ? 'Majestic Slots Casino - €600 Bonus | Online Casino' : 'Majestic Slots Casino - Bonus 600€ | Casino en Ligne'}</title>
        <meta 
          name="description" 
          content={language === 'en' 
            ? 'Discover Majestic Slots, your premium online casino with a €600 welcome bonus. Exclusive games, secure payments, and 24/7 support.' 
            : 'Découvrez Majestic Slots, votre casino en ligne premium avec un bonus de bienvenue de 600€. Jeux exclusifs, paiements sécurisés et support 24/7.'
          } 
        />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/`} />
        <link rel="alternate" hreflang="fr" href={`${baseUrl}/fr/`} />
      </Helmet>
      <Hero />
      <GameGrid />
      <About />
    </>
  );
}