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
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Constraining wrapper added here! */}
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
          
          {/* Card 1: Multifamily First (Improved SVG Iconography) */}
          <div className="feature-card glow-card glass-panel rounded-3xl-card p-8 md:p-10 flex flex-col min-h-[450px] relative overflow-hidden group">
            
            {/* Elegant Sun / Architecture SVG */}
            <div className="absolute top-8 right-8 w-40 h-40 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                {/* Glowing Sun core */}
                <circle cx="120" cy="90" r="30" fill="url(#sunGlow)" className="animate-pulse" />
                <circle cx="120" cy="90" r="45" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 8" className="origin-center animate-[spin_10s_linear_infinite]" />
                
                {/* Abstract Architect Buildings */}
                <path d="M 60 180 L 60 120 L 100 120 L 100 180 Z" stroke="#00F0FF" strokeWidth="1.5" className="fill-surface" />
                <path d="M 140 180 L 140 100 L 190 100 L 190 180 Z" stroke="#00F0FF" strokeWidth="1.5" className="fill-surface" />
                
                {/* Roof Solar Panels */}
                <path d="M 50 110 L 80 90 L 110 110 Z" fill="#00F0FF" fillOpacity="0.2" stroke="#00F0FF" strokeWidth="2" />
                <path d="M 130 90 L 165 70 L 200 90 Z" fill="#8A2BE2" fillOpacity="0.2" stroke="#8A2BE2" strokeWidth="2" />
                
                <defs>
                  <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#00F0FF" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <span className="font-mono font-bold text-neon-cyan text-lg">01</span>
              </div>
              
              <div className="mt-auto flex-1 flex flex-col justify-end">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">Multifamily First</h3>
                <p className="font-sans text-muted leading-relaxed text-base md:text-lg">
                  Designed exclusively for owner-operators. Transform unused roof and parking space into a persistent revenue stream, without disrupting residents.
                </p>
                <div className="mt-8">
                   <button className="flex items-center gap-2 font-sans font-semibold text-white/80 hover:text-white transition-colors group w-max">
                     Explore the process <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Elevate Asset Value (Fixed Layout Overlay & Robust Animation) */}
          <div className="feature-card glow-card glass-panel rounded-3xl-card p-8 md:p-10 flex flex-col min-h-[450px] relative overflow-hidden group">
            
            {/* Financial Model SVG - Absolute but restricted to top-right to prevent text overlap */}
            <div className="absolute top-8 right-8 w-48 h-48 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                {/* 3D Bar Chart Blocks */}
                <g className="text-neon-purple drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                  {/* Bar 1 */}
                  <rect x="20" y="140" width="30" height="40" fill="#8A2BE2" fillOpacity="0.3" stroke="#8A2BE2" strokeWidth="1.5">
                    <animate attributeName="height" values="10;40;40;10" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y" values="170;140;140;170" dur="4s" repeatCount="indefinite" />
                  </rect>
                  {/* Bar 2 */}
                  <rect x="70" y="100" width="30" height="80" fill="#8A2BE2" fillOpacity="0.5" stroke="#8A2BE2" strokeWidth="1.5">
                    <animate attributeName="height" values="20;80;80;20" dur="4s" repeatCount="indefinite" begin="0.2s" />
                    <animate attributeName="y" values="160;100;100;160" dur="4s" repeatCount="indefinite" begin="0.2s" />
                  </rect>
                  {/* Bar 3 */}
                  <rect x="120" y="50" width="30" height="130" fill="#00F0FF" fillOpacity="0.4" stroke="#00F0FF" strokeWidth="1.5">
                    <animate attributeName="height" values="30;130;130;30" dur="4s" repeatCount="indefinite" begin="0.4s" />
                    <animate attributeName="y" values="150;50;50;150" dur="4s" repeatCount="indefinite" begin="0.4s" />
                  </rect>
                </g>
                
                {/* Leaf element wrapping the asset */}
                <path d="M 170 30 C 190 20, 200 40, 180 60 C 160 80, 150 60, 170 30 Z" stroke="#00F0FF" strokeWidth="2" fill="none" strokeDasharray="100" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="100;0;100" dur="6s" repeatCount="indefinite" />
                </path>
                
                {/* Baseline Grid */}
                <path d="M 10 180 L 190 180" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full right-0">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <span className="font-mono font-bold text-neon-purple text-lg">02</span>
              </div>
              <div className="mt-auto flex-1 flex flex-col justify-end w-4/5 md:w-3/4">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">Elevate Asset Value</h3>
                <p className="font-sans text-white/80 leading-relaxed text-base md:text-lg font-light">
                  Residents powered by PearlX save money on their utility bills. Elevate broader property value while hitting your ESG targets.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: How it Works (Flow Diagram) */}
          <div className="feature-card md:col-span-2 glow-card glass-panel rounded-3xl-card p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16 group min-h-[400px]">
            <div className="flex-1 w-full relative z-10 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="font-mono font-bold text-blue-400 text-lg">03</span>
              </div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">How It Works</h3>
              <p className="font-sans text-muted leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                Clean energy with zero capital expenditures. We architect, install, manage, and maintain the complex system at no cost to you. The energy generated is monetized, creating instant Net Operating Income.
              </p>
              <button className="relative w-full sm:w-auto overflow-hidden bg-white text-background px-8 py-4 rounded-full font-sans font-bold text-sm transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center text-center">
                Explore the Protocol Details
              </button>
            </div>
            
            <div className="flex-1 w-full order-1 lg:order-2 flex justify-center items-center h-[250px] lg:h-full relative shrink-0 z-0">
               <svg className="w-full h-full max-h-[300px] overflow-visible" viewBox="0 0 400 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <defs>
                    <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#8A2BE2" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>

                  {/* 1. Solar Panel Node (Left) */}
                  <g className="group-hover:drop-shadow-[0_0_10px_#00F0FF] transition-all duration-500">
                    <rect x="20" y="80" width="40" height="40" rx="8" className="fill-surface stroke-white/20" />
                    <line x1="25" y1="90" x2="55" y2="90" className="stroke-neon-cyan path-draw" />
                    <line x1="25" y1="100" x2="55" y2="100" className="stroke-neon-cyan path-draw" style={{ animationDelay: '0.2s' }} />
                    <line x1="25" y1="110" x2="55" y2="110" className="stroke-neon-cyan path-draw" style={{ animationDelay: '0.4s' }} />
                  </g>

                  {/* Flow Line 1 */}
                  <path d="M 60 100 Q 100 100, 100 100" className="stroke-neon-cyan path-draw" />
                  
                  {/* Pulse Dot moving along path 1 */}
                  <circle r="3" fill="#00F0FF">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 60 100 Q 100 100, 100 100" />
                  </circle>

                  {/* 2. Battery Storage Node (Center) */}
                  <g className="group-hover:drop-shadow-[0_0_10px_#8A2BE2] transition-all duration-500" style={{ transform: 'translateX(80px)' }}>
                     <rect x="20" y="70" width="50" height="60" rx="4" className="fill-surface stroke-neon-purple/50" />
                     <rect x="35" y="65" width="20" height="5" rx="2" className="fill-neon-purple/50" />
                     <path d="M 35 110 L 35 80 L 55 80" className="stroke-neon-purple path-draw" strokeDasharray="3 3"/>
                     {/* Battery level fill */}
                     <rect x="25" y="90" width="40" height="35" className="fill-neon-purple/30 animate-pulse" rx="2" />
                  </g>

                  {/* Flow Line 2 */}
                  <path d="M 150 100 Q 200 100, 240 100" stroke="url(#flowGlow)" className="path-draw" />
                  
                  {/* Pulse Dot moving along path 2 */}
                  <circle r="3" fill="#8A2BE2">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 150 100 Q 200 100, 240 100" />
                  </circle>

                  {/* 3. Building / Output Node (Right) */}
                  <g className="group-hover:drop-shadow-[0_0_10px_#3B82F6] transition-all duration-500" style={{ transform: 'translateX(220px)' }}>
                     <path d="M 20 120 L 20 60 L 40 40 L 60 60 L 60 120 Z" className="fill-surface stroke-blue-500/50" />
                     {/* Windows */}
                     <rect x="30" y="70" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '0.1s' }} />
                     <rect x="42" y="70" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '0.3s' }} />
                     <rect x="30" y="85" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                     <rect x="42" y="85" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '0.7s' }} />
                     <rect x="30" y="100" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '0.9s' }} />
                     <rect x="42" y="100" width="8" height="8" className="fill-blue-400/40 animate-pulse" style={{ animationDelay: '1.1s' }} />
                  </g>
                  
                  {/* Labels */}
                  <text x="40" y="140" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono">SOLAR</text>
                  <text x="125" y="150" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono">BESS</text>
                  <text x="260" y="140" fill="#8B8D98" fontSize="10" textAnchor="middle" className="font-mono">ASSET</text>

               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
