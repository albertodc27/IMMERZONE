"use client";

import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#080c22]">
      {/* Background ambient glow — Dark Premium style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#00d4ff]/[0.04] blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c468ff]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-10">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-sm text-[#00d4ff] font-medium">
            Free-Roam VR Solutions
          </span>
        </div>

        {/* IMMERZONE — Big wordmark with glitch on hover */}
        <h1 className="hero-wordmark font-orbitron font-black text-7xl sm:text-8xl lg:text-[140px] tracking-[6px] leading-none text-white mb-6 cursor-default select-none">
          IMMERZONE
        </h1>

        {/* Tagline — Dark Premium style */}
        <div className="font-orbitron font-medium text-sm sm:text-base tracking-[8px] sm:tracking-[12px] uppercase text-white/40 mb-10 py-3 border-t border-b border-white/[0.06]">
          DIVE INTO THE GAME
        </div>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Turn any space into a revenue-generating VR arena. Turnkey free-roam
          VR experiences for entertainment venues, bowling alleys, and FECs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-[#00d4ff]/15 hover:bg-[#00d4ff]/25 text-[#00d4ff] border border-[#00d4ff]/30 font-semibold rounded-lg transition-all"
          >
            Request a Demo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-8 py-4 bg-[#c468ff]/[0.08] hover:bg-[#c468ff]/15 text-[#c468ff] border border-[#c468ff]/30 font-semibold rounded-lg transition-all"
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
              <div className="font-orbitron font-bold text-3xl sm:text-4xl text-white mb-1">
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
