export default function Partners() {
  const logos = [
    "THE WALL STREET JOURNAL",
    "Bloomberg",
    "HOUSTON CHRONICLE",
    "yahoo! finance",
    "CANARY MEDIA",
    "Solar Power World"
  ];

  return (
    <section className="w-full py-12 bg-background border-t border-b border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="font-mono text-neon-purple text-xs uppercase tracking-widest font-semibold">Featured In</p>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="mx-12 font-serif font-bold text-2xl md:text-3xl text-white/30 tracking-tight"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
