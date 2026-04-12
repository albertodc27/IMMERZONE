import { Globe, ExternalLink, PlayCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="font-orbitron font-bold text-xl tracking-wider"
            >
              <span className="text-gradient">IMMER</span>
              <span className="text-white">ZONE</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Free-roam VR solutions for entertainment venues worldwide. Dive
              into the game.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Globe, href: "#" },
                { icon: ExternalLink, href: "#" },
                { icon: PlayCircle, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00b4ff]/10 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} className="text-gray-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-orbitron font-semibold text-sm text-white tracking-wide mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {["VR Arena", "VR Party", "Game Library", "Compare Products"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-orbitron font-semibold text-sm text-white tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Partners", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-orbitron font-semibold text-sm text-white tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {["Contact", "FAQ", "Documentation", "Privacy Policy"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} IMMERZONE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
