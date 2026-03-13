import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[];
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.3,
          filter: 'blur(10px)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            pinSpacing: false,
          }
        });
      });
      
      ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={sectionRef} className="relative w-full bg-[#05050A] text-white mt-12 md:mt-0 flex flex-col items-center">
      
      {/* Card 1: Turnkey Design */}
      <div className="protocol-card sticky top-0 h-[100dvh] w-full bg-surface/50 backdrop-blur-3xl z-10 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-start md:items-center justify-center pt-24 pb-12 md:py-0 overflow-y-auto md:overflow-hidden">
        <div className="absolute top-1/4 -right-[20%] w-[600px] h-[600px] bg-neon-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Constraining wrapper added here! */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
          <div className="flex-1 w-full max-w-xl md:pr-12">
            <div className="font-mono text-neon-cyan font-bold text-[5rem] md:text-[10rem] opacity-40 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-2 md:mb-4 leading-none mix-blend-screen -ml-1">01</div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white leading-[1.1]">Architectural Synergy</h2>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-muted font-light leading-relaxed mb-4 md:mb-6">
              We don’t just install panels; we engineer a <span className="text-white font-medium">bespoke clean-energy ecosystem</span> seamlessly integrated into your property’s existing footprint.
            </p>
            <ul className="space-y-3 md:space-y-4 font-sans text-sm md:text-base text-muted/80">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF] mt-2 shrink-0"></span>
                <span>Custom rooftop and carport canopy deployment methodologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF] mt-2 shrink-0"></span>
                <span>Non-intrusive operations during integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF] mt-2 shrink-0"></span>
                <span>Intelligent aesthetic coherence with structural assets</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full flex items-center justify-center mt-8 md:mt-0">
             <div className="relative w-full max-w-[240px] md:max-w-lg aspect-square drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">
               <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="200" cy="200" r="30" fill="#00F0FF" opacity="0.8">
                   <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
                   <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="50" stroke="#00F0FF" strokeWidth="1" strokeDasharray="5 15">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="100" stroke="#8A2BE2" strokeWidth="0.5" opacity="0.5" />
                 <circle cx="200" cy="200" r="140" stroke="#00F0FF" strokeWidth="0.2" opacity="0.3" />
                 <g>
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="-360 200 200" dur="20s" repeatCount="indefinite" />
                   <circle cx="200" cy="100" r="6" fill="#8A2BE2" />
                   <line x1="200" y1="100" x2="200" y2="200" stroke="#8A2BE2" strokeWidth="1" opacity="0.3" />
                 </g>
                 <g>
                   <animateTransform attributeName="transform" type="rotate" from="120 200 200" to="-240 200 200" dur="20s" repeatCount="indefinite" />
                   <circle cx="200" cy="60" r="4" fill="#00F0FF" />
                   <line x1="200" y1="60" x2="200" y2="200" stroke="#00F0FF" strokeWidth="1" opacity="0.3" />
                 </g>
               </svg>
             </div>
          </div>
        </div>
      </div>

      {/* Card 2: Zero CapEx */}
      <div className="protocol-card sticky top-0 h-[100dvh] w-full bg-surface/80 backdrop-blur-3xl z-20 border-t border-neon-purple/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-start md:items-center justify-center pt-24 pb-12 md:py-0 overflow-y-auto md:overflow-hidden">
        <div className="absolute top-1/2 -left-[10%] w-[500px] h-[500px] bg-neon-purple/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Constraining wrapper added here! */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 w-full">
          <div className="flex-1 w-full max-w-xl md:pr-12">
            <div className="font-mono text-neon-purple font-bold text-[5rem] md:text-[10rem] opacity-40 drop-shadow-[0_0_20px_rgba(138,43,226,0.4)] mb-2 md:mb-4 leading-none mix-blend-screen -ml-1">02</div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white leading-[1.1]">Zero CapEx Capitalization</h2>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-muted font-light leading-relaxed mb-4 md:mb-6">
              We <span className="text-white font-medium">fund, build, and maintain</span> the entire infrastructure loop. Your property gains a cutting-edge amenity without any upfront monetary liability.
            </p>
            <ul className="space-y-3 md:space-y-4 font-sans text-sm md:text-base text-muted/80">
              <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_10px_#8A2BE2] mt-2 shrink-0"></span>
                 <span>Full lifecycle operations and maintenance covered</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_10px_#8A2BE2] mt-2 shrink-0"></span>
                 <span>Regulatory compliance and permitting fully managed</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[240px] md:max-w-lg aspect-square">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
                 <defs>
                   <radialGradient id="nodeGlowPurple" cx="50%" cy="50%" r="50%">
                     <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
                   </radialGradient>
                 </defs>
                 <circle cx="200" cy="200" r="60" fill="url(#nodeGlowPurple)" opacity="0.5">
                    <animate attributeName="r" values="50;70;50" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="200" cy="200" r="40" className="fill-surface stroke-neon-purple shadow-[0_0_20px_#8A2BE2]" strokeWidth="2" />
                 <path d="M 200 170 L 200 230 M 185 185 C 190 180, 205 180, 215 185 C 220 190, 220 200, 210 205 C 200 210, 190 205, 185 210 C 180 215, 180 225, 190 230 C 200 235, 210 230, 215 225" stroke="#8A2BE2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M 120 200 A 80 80 0 0 1 200 120" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                 </path>
                 <path d="M 280 200 A 80 80 0 0 1 200 280" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round">
                   <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                 </path>
                 <circle cx="200" cy="200" r="140" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Persistent Yield */}
      <div className="protocol-card sticky top-0 h-[100dvh] w-full bg-background z-30 border-t border-neon-cyan/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-start md:items-center justify-center pt-24 pb-12 md:py-0 overflow-y-auto md:overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[700px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Constraining wrapper added here! */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 w-full">
          <div className="flex-1 w-full max-w-xl md:pr-12">
            <div className="font-mono text-neon-cyan font-bold text-[5rem] md:text-[10rem] opacity-40 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-2 md:mb-4 leading-none mix-blend-screen -ml-1">03</div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white leading-[1.1]">Persistent NOI Yield</h2>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-muted font-light leading-relaxed mb-4 md:mb-6">
              Realize immediate Net Operating Income appreciation. Your residents access <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white font-medium">cheaper, cleaner energy</span> directly from your building.
            </p>
            <button className="mt-2 md:mt-4 relative overflow-hidden bg-white text-background px-6 py-3 md:px-8 md:py-4 rounded-full font-sans font-bold text-sm md:text-base transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              Calculate your property's yield
            </button>
          </div>
          
          <div className="flex-1 w-full flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[340px] md:max-w-lg aspect-video md:aspect-square drop-shadow-[0_0_30px_rgba(138,43,226,0.1)]">
              <svg className="w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                     <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <g className="text-white/5" strokeWidth="1">
                   <line x1="50" y1="350" x2="450" y2="350" />
                   <line x1="50" y1="275" x2="450" y2="275" />
                   <line x1="50" y1="200" x2="450" y2="200" />
                   <line x1="50" y1="125" x2="450" y2="125" />
                   <line x1="50" y1="50" x2="450" y2="50" />
                 </g>
                 <rect x="80" y="250" width="20" height="100" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;250;250" dur="2s" fill="freeze" />
                   <animate attributeName="height" values="0;100;100" dur="2s" fill="freeze" />
                 </rect>
                 <rect x="140" y="220" width="20" height="130" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;220;220" dur="2.2s" fill="freeze" />
                   <animate attributeName="height" values="0;130;130" dur="2.2s" fill="freeze" />
                 </rect>
                 <rect x="200" y="180" width="20" height="170" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;180;180" dur="2.4s" fill="freeze" />
                   <animate attributeName="height" values="0;170;170" dur="2.4s" fill="freeze" />
                 </rect>
                 <rect x="260" y="140" width="20" height="210" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;140;140" dur="2.6s" fill="freeze" />
                   <animate attributeName="height" values="0;210;210" dur="2.6s" fill="freeze" />
                 </rect>
                 <rect x="320" y="100" width="20" height="250" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;100;100" dur="2.8s" fill="freeze" />
                   <animate attributeName="height" values="0;250;250" dur="2.8s" fill="freeze" />
                 </rect>
                 <rect x="380" y="60" width="20" height="290" fill="url(#chartGradient)">
                   <animate attributeName="y" values="350;60;60" dur="3s" fill="freeze" />
                   <animate attributeName="height" values="0;290;290" dur="3s" fill="freeze" />
                 </rect>
                 <path d="M 50 300 Q 150 280, 200 200 T 400 80 L 450 50" fill="none" stroke="#8A2BE2" strokeWidth="4" className="drop-shadow-[0_0_10px_#8A2BE2]" strokeDasharray="1000" strokeDashoffset="1000">
                   <animate attributeName="stroke-dashoffset" values="1000;0" dur="3s" fill="freeze" />
                 </path>
                 <g opacity="0">
                   <animate attributeName="opacity" values="0;1" dur="1s" begin="2s" fill="freeze" />
                   <rect x="400" y="20" width="60" height="20" rx="4" fill="#8A2BE2" opacity="0.2" />
                   <text x="430" y="34" fill="#00F0FF" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">+34% NOI</text>
                 </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}