import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32 px-4 md:px-12 bg-[#05050A] relative overflow-hidden flex flex-col items-center">
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 bg-surface/80 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan font-semibold">Mechanism</span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-white max-w-4xl leading-tight">
            Intelligent infrastructure for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple italic">multifamily assets.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Multifamily First */}
          <div className="feature-card bg-[#111116] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col min-h-[400px] relative overflow-hidden transition-colors hover:bg-[#15151A]">
            
            {/* Vercel-style Tiny SVG */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-70">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-neon-cyan">
                {/* Building 1 */}
                <path d="M 20 80 L 20 40 L 40 40 L 40 80 Z" stroke="#00F0FF" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <path d="M 15 40 L 30 25 L 45 40" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 30 25 L 30 10" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 2" />
                
                {/* Building 2 */}
                <path d="M 55 80 L 55 30 L 75 30 L 75 80 Z" stroke="#00F0FF" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.6" />
                <path d="M 50 30 L 65 15 L 80 30" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                
                {/* Signal Rings */}
                <circle cx="30" cy="10" r="15" stroke="#00F0FF" strokeWidth="1" strokeDasharray="1 4" opacity="0.4">
                   <animate attributeName="r" values="5;20;5" dur="3s" repeatCount="indefinite" />
                   <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full w-4/5">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="font-mono font-medium text-neon-cyan text-sm">01</span>
              </div>
              
              <div className="mt-auto flex-1 flex flex-col justify-end">
                <h3 className="font-sans font-bold text-3xl md:text-3xl text-white mb-4">Multifamily First</h3>
                <p className="font-sans text-muted leading-relaxed text-sm md:text-base font-light">
                  Designed exclusively for owner-operators. Transform unused roof and parking space into a persistent revenue stream, without disrupting residents.
                </p>
                <div className="mt-8">
                   <button className="flex items-center gap-2 font-sans font-medium text-sm text-white/90 hover:text-white transition-colors group w-max">
                     Explore the process <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Elevate Asset Value */}
          <div className="feature-card bg-[#111116] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col min-h-[400px] relative overflow-hidden transition-colors hover:bg-[#15151A]">
            
            {/* Vercel-style Tiny Bar Chart SVG */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-80">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Bar 1 */}
                <rect x="25" y="60" width="10" height="20" fill="#8A2BE2" />
                {/* Bar 2 */}
                <rect x="45" y="40" width="10" height="40" fill="#8A2BE2" />
                {/* Bar 3 */}
                <rect x="65" y="20" width="10" height="60" fill="#00F0FF" />
                {/* Up Arrow Curve */}
                <path d="M 60 15 C 75 5, 90 10, 85 25" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" fill="none">
                  <animate attributeName="stroke-dasharray" values="0 100; 100 100" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Baseline Grid */}
                <path d="M 15 80 L 85 80" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full w-4/5">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="font-mono font-medium text-neon-purple text-sm">02</span>
              </div>
              <div className="mt-auto flex-1 flex flex-col justify-end">
                <h3 className="font-sans font-bold text-3xl md:text-3xl text-white mb-4 leading-tight">Elevate Asset Value</h3>
                <p className="font-sans text-muted leading-relaxed text-sm md:text-base font-light">
                  Residents powered by PearlX save money on their utility bills. Elevate broader property value while hitting your ESG targets.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: How it Works (Flow Diagram) */}
          <div className="feature-card md:col-span-2 bg-gradient-to-br from-[#111116] to-[#0A101D] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16 group min-h-[350px]">
            <div className="flex-1 w-full lg:w-1/2 relative z-10 order-2 lg:order-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <span className="font-mono font-medium text-blue-400 text-sm">03</span>
              </div>
              <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">How It Works</h3>
              <p className="font-sans text-muted leading-relaxed text-sm md:text-base font-light mb-8 max-w-md">
                Clean energy with zero capital expenditures. We architect, install, manage, and maintain the complex system at no cost to you. The energy generated is monetized, creating instant Net Operating Income.
              </p>
              <button className="relative w-max overflow-hidden bg-white text-background px-6 py-3 rounded-full font-sans font-bold text-sm transition-transform duration-300 hover:scale-[1.03]">
                Explore the Protocol Details
              </button>
            </div>
            
            <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-2 flex justify-end items-center h-[150px] lg:h-[200px] relative shrink-0 z-0 pr-4">
               {/* Original Flow SVG but scaled massively down to match Vercel styling */}
               <svg className="w-full max-w-[400px] h-full overflow-visible" viewBox="0 0 400 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <defs>
                    <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#8A2BE2" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>

                  {/* 1. Solar Panel Node (Left) */}
                  <g>
                    <rect x="40" y="80" width="40" height="40" rx="4" className="fill-surface stroke-white/20" />
                    <line x1="45" y1="90" x2="75" y2="90" className="stroke-neon-cyan" />
                    <line x1="45" y1="100" x2="75" y2="100" className="stroke-neon-cyan" />
                    <line x1="45" y1="110" x2="75" y2="110" className="stroke-neon-cyan" />
                  </g>

                  {/* Flow Line 1 */}
                  <path d="M 80 100 L 140 100" className="stroke-neon-cyan" />
                  
                  {/* Pulse Dot moving along path 1 */}
                  <circle r="2.5" fill="#00F0FF">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 80 100 L 140 100" />
                  </circle>

                  {/* 2. Battery Storage Node (Center) */}
                  <g style={{ transform: 'translateX(100px)' }}>
                     <rect x="40" y="70" width="40" height="60" rx="4" className="fill-surface stroke-neon-purple/50" />
                     <rect x="50" y="65" width="20" height="5" rx="2" className="fill-neon-purple/50" />
                     {/* Battery level fill */}
                     <rect x="45" y="90" width="30" height="35" className="fill-neon-purple/30 animate-pulse" rx="2" />
                  </g>

                  {/* Flow Line 2 */}
                  <path d="M 180 100 L 260 100" stroke="url(#flowGlow)" />
                  
                  {/* Pulse Dot moving along path 2 */}
                  <circle r="2.5" fill="#8A2BE2">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 180 100 L 260 100" />
                  </circle>

                  {/* 3. Building / Output Node (Right) */}
                  <g style={{ transform: 'translateX(240px)' }}>
                     <path d="M 20 120 L 20 60 L 40 40 L 60 60 L 60 120 Z" className="fill-surface stroke-blue-500/50" />
                     {/* Windows */}
                     <rect x="30" y="70" width="6" height="6" className="fill-blue-400/40" />
                     <rect x="44" y="70" width="6" height="6" className="fill-blue-400/40" />
                     <rect x="30" y="85" width="6" height="6" className="fill-blue-400/40" />
                     <rect x="44" y="85" width="6" height="6" className="fill-blue-400/40" />
                     <rect x="30" y="100" width="6" height="6" className="fill-blue-400/40" />
                     <rect x="44" y="100" width="6" height="6" className="fill-blue-400/40" />
                  </g>
                  
                  {/* Labels */}
                  <text x="60" y="140" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono font-bold tracking-widest text-[#FFF]">SOLAR</text>
                  <text x="160" y="150" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono font-bold tracking-widest text-[#FFF]">BESS</text>
                  <text x="280" y="140" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono font-bold tracking-widest text-[#FFF]">ASSET</text>

               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
