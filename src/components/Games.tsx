import { Swords, Ghost, Wand2, Rocket, Target, Flame } from "lucide-react";

const games = [
  {
    name: "Battlestart",
    category: "Action / PvP",
    players: "2-8",
    description: "Intense team-based combat in a sci-fi arena. Our flagship multiplayer experience.",
    icon: Swords,
    featured: true,
  },
  {
    name: "Zombie Outbreak",
    category: "Horror / Co-op",
    players: "2-6",
    description: "Survive waves of undead in this heart-pounding cooperative shooter.",
    icon: Ghost,
    featured: false,
  },
  {
    name: "Wizard Academy",
    category: "Fantasy / Adventure",
    players: "2-4",
    description: "Cast spells and solve puzzles in a magical world. Family friendly fun.",
    icon: Wand2,
    featured: false,
  },
  {
    name: "Space Rangers",
    category: "Sci-Fi / Co-op",
    players: "2-6",
    description: "Defend the galaxy from alien invaders in this immersive space adventure.",
    icon: Rocket,
    featured: false,
  },
  {
    name: "Arena Clash",
    category: "Competitive / PvP",
    players: "2-8",
    description: "Fast-paced competitive matches with rankings and tournaments.",
    icon: Target,
    featured: false,
  },
  {
    name: "Dragon's Keep",
    category: "Fantasy / Co-op",
    players: "2-4",
    description: "Explore a medieval dungeon and defeat the dragon. Epic adventure for all ages.",
    icon: Flame,
    featured: false,
  },
];

export default function Games() {
  return (
    <section id="games" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            Game Library
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Award-Winning Games
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A growing library of immersive free-roam experiences.
            From action-packed shooters to family-friendly adventures.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.name}
                className={`relative rounded-2xl p-6 transition-all group ${
                  game.featured
                    ? "bg-gradient-to-br from-[#00b4ff]/10 via-[#111827] to-[#111827] border border-[#00b4ff]/20"
                    : "bg-[#111827] border border-white/5 hover:border-white/10"
                }`}
              >
                {game.featured && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#00b4ff]/10 text-[#00b4ff] text-[10px] font-bold tracking-wider">
                    FEATURED
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-[#00b4ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00b4ff]/20 transition-colors">
                  <Icon size={22} className="text-[#00b4ff]" />
                </div>

                <h3 className="font-orbitron font-semibold text-lg text-white mb-1">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-[#00b4ff]/70">{game.category}</span>
                  <span className="text-xs text-gray-500">{game.players} players</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00b4ff] hover:text-[#38cfff] font-medium text-sm transition-colors"
          >
            See all games in our library
            <span className="text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
