import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(titleLine1Ref.current, { y: 40, opacity: 0, duration: 1 }, "-=0.4")
        .from(titleLine2Ref.current, { y: 40, opacity: 0, duration: 1 }, "-=0.8")
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6");
        
      // Animate background elements softly
      gsap.to('.bento-pulse', {
        opacity: 0.6, // INCREASED visibility target to make it vividly clear
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: 'center'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-12 overflow-hidden bg-[#05050A]"
    >
      {/* 
        Bento Grid Background System
      */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ perspective: '1200px' }}
      >
        {/* Core color glows */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-neon-purple/50 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-neon-cyan/40 blur-[150px] rounded-full mix-blend-screen"></div>
        
        {/* Giant Bento Grid positioned with standard React CSS values */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120vw] h-[120vh] min-w-[1200px] grid grid-cols-4 grid-rows-3 gap-6"
          style={{ transform: 'scale(1.25) rotateX(25deg) rotateY(-5deg) rotateZ(5deg)' }}
        >
          {/* Row 1 */}
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl col-span-2 bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          
          {/* Row 2 */}
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl col-span-2 bento-pulse overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0">
             <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent"></div>
          </div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0">
             <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent"></div>
          </div>
          
          {/* Row 3 */}
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
          <div className="bg-white/5 border-[1.5px] border-white/20 rounded-3xl bento-pulse shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-0"></div>
        </div>

        {/* Mask overlay to keep text fully readable, reduced opacity to let the grid shine! */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_center,transparent_0%,#05050A_100%)] opacity-70"></div>
        {/* Soft bottom fade instead of blacking out the whole bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-12">
        
        <div className="hero-badge flex items-center gap-3 bg-surface/80 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(138,43,226,0.3)] transition-shadow duration-500">
          <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_#00F0FF]"></span>
          <span className="font-mono text-sm uppercase tracking-widest text-white/90 font-bold mix-blend-luminosity">Turnkey Infrastructure</span>
        </div>

        <h1 className="flex flex-col gap-2 md:gap-4 w-full relative">
          <div ref={titleLine1Ref} className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            Electrifying Amenities.
          </div>
          <div ref={titleLine2Ref} className="font-serif italic text-4xl md:text-6xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple leading-tight pb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            No-cost solar & battery.
          </div>
        </h1>
        
        <p className="hero-desc mt-8 font-sans text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
          PearlX provides turnkey, no-cost solar and battery storage systems to multifamily owner-operators. Increase your NOI and decrease energy costs seamlessly.
        </p>

        <div className="hero-cta mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center w-full sm:w-auto">
          <button className="relative w-full sm:w-auto overflow-hidden bg-white text-background px-8 py-4 rounded-full font-sans font-bold text-base transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] flex justify-center items-center">
            <span className="relative z-10 group-hover:text-neon-purple transition-colors">
              Get your free NOI estimate
            </span>
          </button>
          
          <button className="flex w-full sm:w-auto justify-center items-center gap-2 font-sans font-semibold text-white/90 hover:text-white transition-colors group px-6 py-4">
            Learn how it works 
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Decorative Bottom Fade bridging to next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#05050A] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
