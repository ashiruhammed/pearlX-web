import { useEffect, useRef, useState } from 'react';

import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row items-center justify-between">
        <div className="font-outfit font-bold text-2xl tracking-tight text-white flex items-center gap-1.5">
          Pearl<span className="text-neon-cyan">X</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-muted">
          <a href="#features" className="hover:text-white transition-colors duration-200">Multifamily</a>
          <a href="#features" className="hover:text-white transition-colors duration-200">Residents</a>
          <a href="#protocol" className="hover:text-white transition-colors duration-200">How It Works</a>
          <a href="#philosophy" className="hover:text-white transition-colors duration-200">About Us</a>
        </div>

        <button className="btn-primary group flex items-center gap-2">
          <span>Get NOI Estimate</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </nav>
  );
}
