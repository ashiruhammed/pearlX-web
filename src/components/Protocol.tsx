import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-card', {
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
    <section id="protocol" ref={sectionRef} className="py-24 md:py-32 px-4 md:px-12 bg-[#05050A] relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Constraining wrapper */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 bg-surface/80 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_#8A2BE2]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-neon-purple font-semibold">Protocol Details</span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-white max-w-4xl leading-tight">
            How we deploy the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white italic">turnkey energy loop.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Card 1: Architectural Synergy */}
          <div className="protocol-card glow-card glass-panel rounded-3xl-card p-8 md:p-10 flex flex-col min-h-[450px] relative overflow-hidden group">
            
            <div className="absolute top-8 right-8 w-40 h-40 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
               <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="200" cy="200" r="30" fill="#00F0FF" opacity="0.8">
                   <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
                   <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="50" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5 15">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="100" stroke="#8A2BE2" strokeWidth="1" opacity="0.5" />
                 <circle cx="200" cy="200" r="140" stroke="#00F0FF" strokeWidth="0.5" opacity="0.3" />
                 <g>
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="-360 200 200" dur="20s" repeatCount="indefinite" />
                   <circle cx="200" cy="100" r="8" fill="#8A2BE2" />
                   <line x1="200" y1="100" x2="200" y2="200" stroke="#8A2BE2" strokeWidth="2" opacity="0.4" />
                 </g>
                 <g>
                   <animateTransform attributeName="transform" type="rotate" from="120 200 200" to="-240 200 200" dur="20s" repeatCount="indefinite" />
                   <circle cx="200" cy="60" r="6" fill="#00F0FF" />
                   <line x1="200" y1="60" x2="200" y2="200" stroke="#00F0FF" strokeWidth="2" opacity="0.4" />
                 </g>
               </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full w-4/5 md:w-3/4">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <span className="font-mono font-bold text-neon-cyan text-lg">01</span>
              </div>
              
              <div className="mt-auto flex-1 flex flex-col justify-end">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">Architectural Synergy</h3>
                <p className="font-sans text-muted leading-relaxed text-base md:text-lg mb-6">
                  We don’t just install panels; we engineer a bespoke clean-energy ecosystem seamlessly integrated into your property’s existing footprint.
                </p>
                <ul className="space-y-3 font-sans text-sm md:text-base text-muted/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0"></span>
                    <span>Custom rooftop and carport canopy deployment methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0"></span>
                    <span>Intelligent aesthetic coherence with structural assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Zero CapEx Capitalization */}
          <div className="protocol-card glow-card glass-panel rounded-3xl-card p-8 md:p-10 flex flex-col min-h-[450px] relative overflow-hidden group">
            
            <div className="absolute top-8 right-8 w-40 h-40 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
                 <defs>
                   <radialGradient id="nodeGlowPurple2" cx="50%" cy="50%" r="50%">
                     <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
                   </radialGradient>
                 </defs>
                 <circle cx="200" cy="200" r="60" fill="url(#nodeGlowPurple2)" opacity="0.5">
                    <animate attributeName="r" values="50;70;50" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="40" className="fill-surface stroke-neon-purple shadow-[0_0_20px_#8A2BE2]" strokeWidth="3" />
                 <path d="M 200 170 L 200 230 M 185 185 C 190 180, 205 180, 215 185 C 220 190, 220 200, 210 205 C 200 210, 190 205, 185 210 C 180 215, 180 225, 190 230 C 200 235, 210 230, 215 225" stroke="#8A2BE2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M 120 200 A 80 80 0 0 1 200 120" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                 </path>
                 <path d="M 280 200 A 80 80 0 0 1 200 280" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                 </path>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full right-0 w-4/5 md:w-3/4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <span className="font-mono font-bold text-neon-purple text-lg">02</span>
              </div>
              <div className="mt-auto flex-1 flex flex-col justify-end">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">Zero CapEx Capitalization</h3>
                <p className="font-sans text-muted leading-relaxed text-base md:text-lg font-light mb-6">
                  We fund, build, and maintain the entire infrastructure loop. Your property gains a cutting-edge amenity without any upfront monetary liability.
                </p>
                <ul className="space-y-3 font-sans text-sm md:text-base text-muted/80">
                  <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 shrink-0"></span>
                     <span>Full lifecycle operations and maintenance covered</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 shrink-0"></span>
                     <span>Regulatory compliance and permitting fully managed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Persistent NOI Yield (Spans 2 columns) */}
           <div className="protocol-card md:col-span-2 glow-card glass-panel rounded-3xl-card p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16 group min-h-[400px]">
             
            <div className="flex-1 w-full relative z-10 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="font-mono font-bold text-white/90 text-lg">03</span>
              </div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Persistent NOI Yield</h3>
              <p className="font-sans text-muted leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                Realize immediate Net Operating Income appreciation. Your residents access <span className="text-white font-medium">cheaper, cleaner energy</span> directly from your building.
              </p>
              <button className="relative w-full sm:w-auto overflow-hidden bg-white text-background px-8 py-4 rounded-full font-sans font-bold text-sm transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center text-center">
                Calculate your property's yield
              </button>
            </div>

            <div className="flex-1 w-full order-1 lg:order-2 flex justify-center items-center h-[250px] lg:h-full relative shrink-0 z-0">
               <div className="relative w-full max-w-lg aspect-auto md:aspect-video drop-shadow-[0_0_30px_rgba(138,43,226,0.1)] opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <svg className="w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="none">
                     <defs>
                       <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.4" />
                         <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
                       </linearGradient>
                     </defs>
                     <g className="text-white/5" strokeWidth="1">
                       <line x1="50" y1="350" x2="450" y2="350" />
                       <line x1="50" y1="275" x2="450" y2="275" />
                       <line x1="50" y1="200" x2="450" y2="200" />
                       <line x1="50" y1="125" x2="450" y2="125" />
                       <line x1="50" y1="50" x2="450" y2="50" />
                     </g>
                     <rect x="80" y="250" width="20" height="100" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;250;250" dur="2s" fill="freeze" />
                       <animate attributeName="height" values="0;100;100" dur="2s" fill="freeze" />
                     </rect>
                     <rect x="140" y="220" width="20" height="130" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;220;220" dur="2.2s" fill="freeze" />
                       <animate attributeName="height" values="0;130;130" dur="2.2s" fill="freeze" />
                     </rect>
                     <rect x="200" y="180" width="20" height="170" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;180;180" dur="2.4s" fill="freeze" />
                       <animate attributeName="height" values="0;170;170" dur="2.4s" fill="freeze" />
                     </rect>
                     <rect x="260" y="140" width="20" height="210" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;140;140" dur="2.6s" fill="freeze" />
                       <animate attributeName="height" values="0;210;210" dur="2.6s" fill="freeze" />
                     </rect>
                     <rect x="320" y="100" width="20" height="250" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;100;100" dur="2.8s" fill="freeze" />
                       <animate attributeName="height" values="0;250;250" dur="2.8s" fill="freeze" />
                     </rect>
                     <rect x="380" y="60" width="20" height="290" fill="url(#chartGradient2)">
                       <animate attributeName="y" values="350;60;60" dur="3s" fill="freeze" />
                       <animate attributeName="height" values="0;290;290" dur="3s" fill="freeze" />
                     </rect>
                     <path d="M 50 300 Q 150 280, 200 200 T 400 80 L 450 50" fill="none" stroke="#00F0FF" strokeWidth="4" className="drop-shadow-[0_0_10px_#00F0FF]" strokeDasharray="1000" strokeDashoffset="1000">
                       <animate attributeName="stroke-dashoffset" values="1000;0" dur="3s" fill="freeze" />
                     </path>
                     <g opacity="0">
                       <animate attributeName="opacity" values="0;1" dur="1s" begin="2s" fill="freeze" />
                       <rect x="400" y="20" width="60" height="20" rx="4" fill="#00F0FF" opacity="0.2" />
                       <text x="430" y="34" fill="#00F0FF" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">+34% NOI</text>
                     </g>
                  </svg>
               </div>
            </div>

           </div>
        </div>
      </div>
    </section>
  );
}
