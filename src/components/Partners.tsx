import { ArrowRight, Award, Star, Gem } from "lucide-react";

const tiers = [
  {
    icon: Award,
    name: "Authorized",
    subtitle: "Start your VR journey",
    benefits: [
      "Full hardware & software package",
      "Installation & operator training",
      "Standard game library access",
      "Remote technical support",
      "Marketing starter kit",
    ],
  },
  {
    icon: Star,
    name: "Premium",
    subtitle: "For established venues",
    benefits: [
      "Everything in Authorized",
      "Priority game releases",
      "Dedicated account manager",
      "Co-branded marketing materials",
      "Quarterly business reviews",
      "Revenue optimization consulting",
    ],
    highlight: true,
  },
  {
    icon: Gem,
    name: "Elite",
    subtitle: "Multi-venue operators",
    benefits: [
      "Everything in Premium",
      "Exclusive game titles",
      "Custom branding options",
      "Territory protection",
      "Annual on-site visit",
      "Early access to new products",
      "Volume pricing",
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            Partner Program
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Grow With IMMERZONE
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Join our partner network and get the support you need to build a
            successful VR business. Three tiers designed to grow with you.
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 transition-all ${
                  tier.highlight
                    ? "bg-gradient-to-b from-[#00b4ff]/10 to-[#111827] border border-[#00b4ff]/25 scale-[1.02]"
                    : "bg-[#111827] border border-white/5 hover:border-white/10"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00b4ff] text-white text-[10px] font-bold tracking-wider">
                    RECOMMENDED
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-[#00b4ff]/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#00b4ff]" />
                </div>

                <h3 className="font-orbitron font-bold text-xl text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{tier.subtitle}</p>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00b4ff] shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    tier.highlight
                      ? "bg-[#00b4ff] hover:bg-[#00a0e6] text-white glow-blue-sm"
                      : "border border-white/10 hover:border-[#00b4ff]/40 text-white"
                  }`}
                >
                  Become a Partner
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
