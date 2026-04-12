import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#00b4ff]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4ff]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00b4ff]/20 bg-[#00b4ff]/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00b4ff] animate-pulse" />
          <span className="text-sm text-[#00b4ff] font-medium">
            Free-Roam VR Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-orbitron font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
          <span className="text-gradient">DIVE INTO</span>
          <br />
          <span className="text-white">THE GAME</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Turn any space into a revenue-generating VR arena. IMMERZONE delivers
          turnkey free-roam VR experiences for entertainment venues, bowling
          alleys, and FECs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-[#00b4ff] hover:bg-[#00a0e6] text-white font-semibold rounded-xl transition-all glow-blue-sm hover:glow-blue"
          >
            Request a Demo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/25 text-white font-semibold rounded-xl transition-all"
          >
            <Play size={18} />
            Explore Products
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "50+", label: "Venues" },
            { value: "10+", label: "Countries" },
            { value: "100K+", label: "Players" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron font-bold text-3xl sm:text-4xl text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
