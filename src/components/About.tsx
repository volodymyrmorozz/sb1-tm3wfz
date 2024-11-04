import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-[#151523]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Majestic Slots Casino</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {language === 'en' 
                ? 'Welcome to the prestigious world of Majestic Slots, a leading name in online casino gaming. Since our establishment in 2014, we have been cultivating excellence to offer our players an unparalleled gaming experience. Our online casino combines the refinement of a premium establishment with the convenience of remote gaming, all in a completely secure environment.'
                : 'Bienvenue dans l\'univers prestigieux de Majestic Slots, une référence incontournable du casino en ligne en France. Depuis notre création en 2014, nous cultivons l\'excellence pour offrir à nos joueurs une expérience de jeu incomparable. Notre casino en ligne associe le raffinement d\'un établissement premium avec la commodité du jeu à distance, le tout dans un environnement totalement sécurisé.'
              }
            </p>
            <p className="text-gray-300 leading-relaxed">
              {language === 'en'
                ? 'Our exclusive partnership with Real Time Gaming (RTG) ensures an exceptional selection of the best casino games. You\'ll discover a rich universe of entertainment with our legendary slot machines like Plentiful Treasure, Storm Lords, and Cleopatra\'s Gold.'
                : 'Notre partenariat exclusif avec Real Time Gaming (RTG) vous garantit une sélection exceptionnelle des meilleurs jeux de casino. Vous découvrirez un univers riche en divertissement avec nos machines à sous légendaires comme Plentiful Treasure, Storm Lords et Cleopatra\'s Gold.'
              }
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#1a1a2e] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#ffd700] mb-4">
                  {language === 'en' ? 'Payment Solutions' : 'Solutions de Paiement'}
                </h3>
                <p className="text-gray-300">
                  {language === 'en'
                    ? 'We accept a wide range of secure payment methods, from credit cards to cryptocurrencies, for a hassle-free gaming experience.'
                    : 'Nous acceptons une large gamme de moyens de paiement sécurisés, des cartes bancaires aux cryptomonnaies, pour une expérience de jeu sans contrainte.'
                  }
                </p>
              </div>
              <div className="bg-[#1a1a2e] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#ffd700] mb-4">
                  {language === 'en' ? '24/7 Customer Service' : 'Service Client 24/7'}
                </h3>
                <p className="text-gray-300">
                  {language === 'en'
                    ? 'Our multilingual support team is available 24 hours a day, 7 days a week, to assist you throughout your gaming experience.'
                    : 'Notre équipe de support francophone est disponible 24 heures sur 24, 7 jours sur 7, pour vous accompagner dans votre expérience de jeu.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}