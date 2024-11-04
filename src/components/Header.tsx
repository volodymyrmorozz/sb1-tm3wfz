import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PLAY_URL = 'https://jogoal.com/PbChv1';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isEnglish = language === 'en';
  const togglePath = isEnglish ? '/fr' : '/';

  return (
    <header className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-gray-700">
          <div className="flex justify-end space-x-4 text-sm">
            <Link 
              to="/"
              className={`hover:text-gold transition ${!isEnglish ? 'text-gold' : ''}`}
            >
              FR
            </Link>
            <Link 
              to={togglePath}
              className={`hover:text-gold transition ${isEnglish ? 'text-gold' : ''}`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/9qhb4sY/logo.png" 
              alt="Majestic Slots Casino Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to={language === 'en' ? '/' : '/fr'} className="hover:text-[#ffd700] transition">{t('nav.home')}</Link>
            <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.promotions')}</a>
            <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.calendar')}</a>
            <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.vip')}</a>
            <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.jackpots')}</a>
            <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.support')}</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={PLAY_URL}
              className="bg-[#ffd700] text-black px-6 py-2 rounded-full font-bold hover:bg-[#ffed4a] transition"
            >
              {t('cta.login')}
            </a>
            <a 
              href={PLAY_URL}
              className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-bold hover:bg-[#45a049] transition"
            >
              {t('cta.register')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to={language === 'en' ? '/' : '/fr'} className="hover:text-[#ffd700] transition">{t('nav.home')}</Link>
              <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.promotions')}</a>
              <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.calendar')}</a>
              <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.vip')}</a>
              <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.jackpots')}</a>
              <a href={PLAY_URL} className="hover:text-[#ffd700] transition">{t('nav.support')}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}