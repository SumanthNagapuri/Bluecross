"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold" style={{ color: "#F97316" }}>3.0</span>
              <span className="text-2xl font-bold" style={{ color: "#1B9AD2" }}>Labs</span>
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ABC Management Portal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Built for Blue Cross of Hyderabad to streamline animal birth control
              operations, veterinary care, and shelter management across the city.
            </p>
            <div className="flex gap-3 mt-6">
              {["🐕", "🐈", "🐇"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Features", href: "#features" },
                { label: "Download App", href: "#download" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact-info">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Blue Cross of Hyderabad,<br />Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+9140" className="hover:text-blue-400 transition-colors">
                  +91 40 XXXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:info@bluecrosshyd.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@bluecrosshyd.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Blue Cross of Hyderabad. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <span className="text-blue-400 font-semibold">3.0 Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
