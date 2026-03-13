import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal for statement 1
      gsap.from(textRef1.current, {
        scrollTrigger: {
          trigger: textRef1.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Split text reveal for statement 2
      gsap.from(textRef2.current, {
        scrollTrigger: {
          trigger: textRef2.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative w-full min-h-[60vh] flex flex-col justify-center py-32 px-6 md:px-16 overflow-hidden bg-background">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <p className="font-mono text-neon-cyan uppercase tracking-widest text-sm font-semibold mb-16 text-center">
          The Manifesto
        </p>

        <div className="flex flex-col gap-12 md:gap-24 relative">
          <div className="absolute left-[8%] md:left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

          <div ref={textRef1} className="max-w-2xl text-muted pl-0 md:pl-20 border-l border-white/10 md:border-none pl-6 ml-4 md:ml-0">
            <p className="font-sans text-xl md:text-3xl font-medium leading-tight">
              Most property owners focus on:
            </p>
            <p className="font-serif italic text-4xl md:text-6xl mt-2 tracking-custom text-white/40">
              fixed utility liabilities.
            </p>
          </div>

          <div ref={textRef2} className="max-w-4xl text-left pl-0 md:pl-20 border-l border-neon-cyan/50 md:border-none pl-6 ml-4 md:ml-0 relative">
            <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)] hidden md:block" style={{ left: '-4px' }}></div>
            <p className="font-sans text-2xl md:text-4xl font-bold text-white leading-tight">
              We focus on:
            </p>
            <p className="font-serif italic text-5xl md:text-7xl lg:text-8xl mt-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-cyan leading-[1.1]">
              turnkey clean-energy assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
