import { AiOutlineLinkedin, AiOutlineMail, AiOutlineMedium } from "react-icons/ai";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900/80 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Ifeb</span>
              <span className="text-yellow-400">uche</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Empowering organizations to achieve seamless execution, measurable growth, and lasting impact.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/ifebuche-juliet-obi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <AiOutlineLinkedin className="text-gray-300 group-hover:text-black text-xl" />
              </a>
              <a
                href="mailto:Ifebuchesolution@gmail.com"
                className="w-11 h-11 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <AiOutlineMail className="text-gray-300 group-hover:text-black text-xl" />
              </a>
              <a
                href="https://medium.com/@ifebuche-juliet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <AiOutlineMedium className="text-gray-300 group-hover:text-black text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-base">
                Ready to transform your projects?
              </p>
              <a
                href="https://calendly.com/ifebuchesolution/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ifebuche Juliet. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm group"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-8 h-8 bg-gray-800 group-hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300">
              <FiArrowUp className="text-gray-300 group-hover:text-black" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
