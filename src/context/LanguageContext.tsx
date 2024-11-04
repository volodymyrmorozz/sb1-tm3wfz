import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.promotions': 'Promotions',
    'nav.calendar': 'Calendrier',
    'nav.vip': 'VIP',
    'nav.jackpots': 'Jackpots',
    'nav.support': 'Support',
    'cta.login': 'Se Connecter',
    'cta.register': 'S\'inscrire',
    'hero.bonus': '100% BONUS JUSQU\'À',
    'hero.amount': '600 €',
    'hero.insurance': '+100% D\'ASSURANCE SUR LE 1ER DÉPÔT',
    'hero.play': 'Jouer Maintenant',
    'games.popular': 'Jeux Populaires',
    'games.play': 'Jouer',
    'about.title': 'Majestic Slots Casino',
    'about.welcome': 'Bienvenue dans l\'univers prestigieux de Majestic Slots',
    'footer.quickLinks': 'Liens Rapides',
    'footer.support': 'Support',
    'footer.followUs': 'Suivez-nous',
    'footer.rights': '© 2024 Majestic Slots. Tous droits réservés.',
  },
  en: {
    'nav.home': 'Home',
    'nav.promotions': 'Promotions',
    'nav.calendar': 'Calendar',
    'nav.vip': 'VIP',
    'nav.jackpots': 'Jackpots',
    'nav.support': 'Support',
    'cta.login': 'Login',
    'cta.register': 'Register',
    'hero.bonus': '100% BONUS UP TO',
    'hero.amount': '€600',
    'hero.insurance': '+100% INSURANCE ON 1ST DEPOSIT',
    'hero.play': 'Play Now',
    'games.popular': 'Popular Games',
    'games.play': 'Play',
    'about.title': 'Majestic Slots Casino',
    'about.welcome': 'Welcome to the prestigious world of Majestic Slots',
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 Majestic Slots. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}