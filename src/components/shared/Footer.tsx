import { Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-custom-black-100 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand/About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Ashikul Islam Nayeem</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer creating performant, accessible web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ainayeem"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ainayeem/"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-blue-400" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61560522810852"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-300 hover:text-blue-500" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex gap-20">
              <div>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-indigo-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-indigo-400 transition-colors">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="/blogs" className="hover:text-indigo-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Me</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <a href="mailto:ain.nayeem1999@gmail.com" className="hover:text-indigo-400 transition-colors">
                  ain.nayeem1999@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>Dhanmondi, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ashikul Islam Nayeem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
