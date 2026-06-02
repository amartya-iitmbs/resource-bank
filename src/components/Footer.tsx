import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy-600 bg-navy-800/50 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">Amartya Finance Society</h3>
            <p className="mt-2 text-sm text-gray-400">
              IIT Madras BS Degree
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Official finance society
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold-500 transition-colors">
                  Contribute Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold-500 transition-colors">
                  Request Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/amartya-iitmbs/introductory-bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:finance.society@study.iitm.ac.in"
                className="text-gray-400 hover:text-gold-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-600">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Amartya Finance Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
