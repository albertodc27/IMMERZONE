"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is IMMERZONE free-roam VR?",
    a: "IMMERZONE provides turnkey free-roam VR solutions for entertainment venues. Players wear wireless VR headsets and walk freely in a dedicated arena space, interacting with virtual worlds and each other. No cables, no boundaries — just immersive gameplay.",
  },
  {
    q: "How much space do I need?",
    a: "Our solutions scale from a minimum of 4×4m (16 sqm) for VR Party up to 10×10m (100 sqm) for large arenas. The most popular configuration is 6×8m (48 sqm), which fits comfortably in most entertainment venues and bowling alleys.",
  },
  {
    q: "How many players can play at once?",
    a: "Depending on the arena size and game, you can host 2 to 8 players simultaneously in a single session. VR Party supports up to 4 players. Sessions typically last 15-30 minutes, allowing high throughput.",
  },
  {
    q: "Is it safe for first-time VR users?",
    a: "Absolutely. Our system includes built-in safety boundaries, and the free-roam design means no tripping on cables. A brief on-boarding tutorial gets players comfortable in under 2 minutes. Suitable for ages 8 and up.",
  },
  {
    q: "What kind of revenue can I expect?",
    a: "Revenue varies by market and pricing, but our partners typically charge €15-30 per player per session. A well-run arena can generate significant returns with sessions running every 20-30 minutes throughout the day.",
  },
  {
    q: "What is VR Party and how is it different from VR Arena?",
    a: "VR Party is our portable free-roam VR solution that fits in a single rugged travel case (Nanuk 960). It's designed for mobile entertainment — parties, corporate events, pop-ups. VR Arena is a permanent installation for venues. Both share the same game platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 section-gradient">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "bg-[#111827] border-[#00b4ff]/20"
                    : "bg-[#111827]/50 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#00b4ff] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
