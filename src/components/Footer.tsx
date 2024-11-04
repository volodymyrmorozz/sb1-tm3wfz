import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <footer className="bg-[#0f0f1a] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://i.ibb.co/9qhb4sY/logo.png" 
                alt="Majestic Slots Casino Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm">
              {isEnglish 
                ? 'A leading name in online casino gaming since 2014.'
                : 'Une référence incontournable du casino en ligne en France depuis 2014.'
              }
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              {isEnglish ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ffd700] transition">{isEnglish ? 'Home' : 'Accueil'}</a></li>
              <li><a href="#" className="hover:text-[#ffd700] transition">{isEnglish ? 'Promotions' : 'Promotions'}</a></li>
              <li><a href="#" className="hover:text-[#ffd700] transition">VIP</a></li>
              <li><a href="#" className="hover:text-[#ffd700] transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>support@majesticslots.com</li>
              <li>{isEnglish ? '+44-800-046-5418' : '+33-800-919811'}</li>
              <li>{isEnglish ? '24/7 Live Chat' : '24/7 Chat en direct'}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              {isEnglish ? 'Follow Us' : 'Suivez-nous'}
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ffd700] transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffd700] transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffd700] transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>{isEnglish ? '© 2024 Majestic Slots. All rights reserved.' : '© 2024 Majestic Slots. Tous droits réservés.'}</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-[#ffd700] transition">
              {isEnglish ? 'Legal Notice' : 'Mentions légales'}
            </a>
            <a href="#" className="hover:text-[#ffd700] transition">
              {isEnglish ? 'Privacy Policy' : 'Politique de confidentialité'}
            </a>
            <a href="#" className="hover:text-[#ffd700] transition">
              {isEnglish ? 'Responsible Gaming' : 'Jeu responsable'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}