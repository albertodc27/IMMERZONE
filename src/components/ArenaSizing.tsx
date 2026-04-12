export default function ArenaSizing() {
  const sizes = [
    {
      name: "Compact",
      dimensions: "5 × 5 m",
      sqm: "25 sqm",
      players: "Up to 4",
      ideal: "Small venues, bowling alleys with limited space",
    },
    {
      name: "Standard",
      dimensions: "6 × 8 m",
      sqm: "48 sqm",
      players: "Up to 6",
      ideal: "Medium venues, FECs, entertainment centers",
      popular: true,
    },
    {
      name: "Premium",
      dimensions: "8 × 10 m",
      sqm: "80 sqm",
      players: "Up to 8",
      ideal: "Large venues, dedicated VR centers",
    },
    {
      name: "VR Party",
      dimensions: "4 × 4 m",
      sqm: "16 sqm",
      players: "Up to 4",
      ideal: "Portable — events, parties, temporary setups",
    },
  ];

  return (
    <section id="arena" className="relative py-24 sm:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            Modular Arena Sizes
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Turn Any Space Into Revenue
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Our modular system adapts to your available space. From a compact
            4&times;4m portable setup to a full 80+ sqm premium arena.
          </p>
        </div>

        {/* Sizing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((size) => (
            <div
              key={size.name}
              className={`relative rounded-2xl p-6 text-center transition-all ${
                size.popular
                  ? "bg-gradient-to-b from-[#00b4ff]/10 to-[#111827] border border-[#00b4ff]/25"
                  : "bg-[#111827] border border-white/5 hover:border-white/10"
              }`}
            >
              {size.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00b4ff] text-white text-[10px] font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-orbitron font-bold text-lg text-white mb-4 mt-1">
                {size.name}
              </h3>

              {/* Visual size representation */}
              <div className="w-full aspect-square max-w-[140px] mx-auto mb-5 relative">
                <div
                  className={`absolute inset-0 rounded-xl border-2 border-dashed ${
                    size.popular ? "border-[#00b4ff]/40" : "border-white/10"
                  } flex items-center justify-center`}
                >
                  <span className="font-orbitron text-2xl font-bold text-gradient">
                    {size.sqm}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Dimensions</span>
                  <span className="text-white font-medium">{size.dimensions}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Players</span>
                  <span className="text-white font-medium">{size.players}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                {size.ideal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
