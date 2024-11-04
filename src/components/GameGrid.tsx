import { useLanguage } from '../context/LanguageContext';

const PLAY_URL = 'https://jogoal.com/PbChv1';

interface Game {
  title: string;
  image: string;
}

const popularGames: Game[] = [
  {
    title: "Sweet 16",
    image: "https://i.ibb.co/hcPk38q/Sweet-16.webp"
  },
  {
    title: "Asgard",
    image: "https://i.ibb.co/pXF2rML/Asgard.webp"
  },
  {
    title: "Builder Beaver",
    image: "https://i.ibb.co/xszM111/Builder-Beaver.webp"
  },
  {
    title: "Caesar's Empire",
    image: "https://i.ibb.co/xYW2H0s/Caesar-s-Empire.webp"
  },
  {
    title: "Cash Bandits 2",
    image: "https://i.ibb.co/92JxmDK/Cash-Bandits-2.webp"
  },
  {
    title: "Storm Lords",
    image: "https://i.ibb.co/ZmWm5Mr/Storm-Lords.webp"
  }
];

export default function GameGrid() {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          {language === 'en' ? 'Popular Games' : 'Jeux Populaires'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularGames.map((game, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={game.image} 
                  alt={game.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold">{game.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={PLAY_URL}
                  className="bg-[#ffd700] text-black px-4 py-2 rounded-full font-bold transform -translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  {language === 'en' ? 'Play Now' : 'Jouer'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}