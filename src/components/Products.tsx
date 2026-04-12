import { ArrowRight, Wifi, Box, Gamepad2, Monitor } from "lucide-react";

const products = [
  {
    tag: "ARENA",
    name: "VR Arena",
    description:
      "The complete free-roam VR arena solution for entertainment venues, bowling alleys, and FECs. Permanent installation with premium experience.",
    features: [
      "Up to 8 simultaneous players",
      "Custom arena sizes from 25 to 100+ sqm",
      "Full hardware + software package",
      "Operator dashboard & analytics",
      "Ongoing game library updates",
      "On-site installation & training",
    ],
    cta: "Explore VR Arena",
    href: "#contact",
    highlight: true,
  },
  {
    tag: "PORTABLE",
    name: "VR Party",
    description:
      "Portable free-roam VR in a rugged case. Set up anywhere in under 30 minutes. Perfect for events, rentals, and mobile entertainment.",
    features: [
      "Battlestart game included",
      "Fits in a single Nanuk 960 case",
      "Quick setup, no permanent install",
      "Up to 4 players per session",
      "Ideal for parties & corporate events",
      "Revenue from day one",
    ],
    cta: "Explore VR Party",
    href: "#contact",
    highlight: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Solutions
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Freedom of Choice
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Two flexible VR solutions designed for different business needs.
            From permanent arenas to portable party packs.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative rounded-2xl p-8 sm:p-10 transition-all ${
                product.highlight
                  ? "bg-gradient-to-br from-[#00b4ff]/10 via-[#111827] to-[#111827] border border-[#00b4ff]/20"
                  : "bg-[#111827] border border-white/5 hover:border-white/10"
              }`}
            >
              {product.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00b4ff]/10 border border-[#00b4ff]/20 text-[#00b4ff] text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}

              <div className="text-[#00b4ff] font-orbitron font-bold text-xs tracking-[0.3em] mb-3">
                {product.tag}
              </div>
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mb-4">
                {product.name}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {product.description}
              </p>

              <ul className="space-y-3 mb-10">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00b4ff] shrink-0" />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  product.highlight
                    ? "bg-[#00b4ff] hover:bg-[#00a0e6] text-white glow-blue-sm"
                    : "border border-white/10 hover:border-[#00b4ff]/40 text-white"
                }`}
              >
                {product.cta}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
