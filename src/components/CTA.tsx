import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — CTA text */}
          <div>
            <p className="text-[#00b4ff] font-semibold text-sm uppercase tracking-widest mb-3">
              Ready to Start?
            </p>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Transform Your Venue With VR
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Get in touch and we&apos;ll help you find the perfect IMMERZONE
              solution for your business. Free consultation, no commitment.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b4ff]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#00b4ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">info@immerzone.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b4ff]/10 flex items-center justify-center">
                  <MapPin size={18} className="text-[#00b4ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">Italy, EU</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b4ff]/10 flex items-center justify-center">
                  <Phone size={18} className="text-[#00b4ff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#0a0e1a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00b4ff]/40 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 bg-[#0a0e1a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00b4ff]/40 transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#0a0e1a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00b4ff]/40 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  I&apos;m interested in
                </label>
                <select className="w-full px-4 py-3 bg-[#0a0e1a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00b4ff]/40 transition-colors text-sm">
                  <option value="">Select an option</option>
                  <option value="arena">VR Arena</option>
                  <option value="party">VR Party</option>
                  <option value="both">Both solutions</option>
                  <option value="partner">Partner program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your venue and goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0a0e1a] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00b4ff]/40 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00b4ff] hover:bg-[#00a0e6] text-white font-semibold rounded-xl transition-all glow-blue-sm hover:glow-blue"
              >
                Send Message
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
