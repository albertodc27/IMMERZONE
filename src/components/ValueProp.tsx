import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High ROI",
    description:
      "VR attractions generate 3-5x more revenue per square meter than traditional entertainment. Fast payback, recurring income.",
  },
  {
    icon: Users,
    title: "Group Experiences",
    description:
      "Up to 8 players simultaneously in free-roam multiplayer games. Perfect for parties, team building, and walk-in customers.",
  },
  {
    icon: Zap,
    title: "Turnkey Setup",
    description:
      "From hardware to software, we deliver everything ready to operate. Quick installation, full training, ongoing support.",
  },
  {
    icon: Shield,
    title: "Proven & Safe",
    description:
      "Wireless, room-scale VR with built-in safety systems. Suitable for all ages and experience levels.",
  },
];

export default function ValueProp() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            Why Free-Roam VR
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Grow Your Entertainment Business
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Free-roam VR is the fastest-growing attraction in location-based
            entertainment. Give your guests an experience they can&apos;t get at
            home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="border-gradient rounded-2xl p-8 bg-[#111827] hover:bg-[#141c2e] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00b4ff]/10 flex items-center justify-center mb-5 group-hover:bg-[#00b4ff]/20 transition-colors">
                  <Icon size={24} className="text-[#00b4ff]" />
                </div>
                <h3 className="font-orbitron font-semibold text-lg text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
