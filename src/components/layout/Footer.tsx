import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Github, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from '@/src/components/common/BrandLogo.tsx';

export function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <BrandLogo className="w-12 h-12 transform transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold tracking-tighter text-white font-display">INOVEXA</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Think Smart, Build Smarter. Empowering businesses with next-generation IT infrastructure and futuristic networking solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/inovexatechnologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400 transition-all">
                <Facebook size={18} />
              </a>
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-tight">Customer Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'Returns & Warranty', path: '/returns' },
                { name: 'Order Tracking', path: '#' },
                { name: 'Shipping Policy', path: '/shipping' },
                { name: 'Privacy Policy', path: '/privacy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/50 hover:text-white transition-colors text-sm">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-tight">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Road-1, Shamoly, Dhaka,<br />Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+8801813065665</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>contact@inovexabd.com</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-6">
          <p className="text-white/30 text-xs font-medium text-center">
            © 2026 Inovexa Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
