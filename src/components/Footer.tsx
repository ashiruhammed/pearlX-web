export default function Footer() {
  return (
    <footer className="w-full bg-surface text-white rounded-t-[4rem] px-6 py-20 md:px-16 mt-[-4rem] relative z-40 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* Brand Area */}
        <div className="flex flex-col max-w-sm">
          <div className="font-outfit font-bold text-4xl mb-4 text-white flex items-center gap-1.5">
            Pearl<span className="text-neon-cyan">X</span>
          </div>
          <p className="font-sans text-base text-muted mb-8 leading-relaxed">
            Precision building infrastructure powered by carbon-free energy data. We electrify amenities.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neon-cyan bg-white/5 border border-white/10 px-4 py-2 rounded-full w-max mt-auto shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            System Operational
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 font-sans w-full md:w-auto text-sm">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-white mb-1 uppercase tracking-widest text-xs font-semibold">Platform</span>
            <a href="#" className="link-lift text-muted">Multifamily</a>
            <a href="#" className="link-lift text-muted">Residents</a>
            <a href="#" className="link-lift text-muted">How It Works</a>
          </div>
          
          <div className="flex flex-col gap-5">
            <span className="font-mono text-white mb-1 uppercase tracking-widest text-xs font-semibold">Company</span>
            <a href="#" className="link-lift text-muted">About Us</a>
            <a href="#" className="link-lift text-muted">Careers</a>
            <a href="#" className="link-lift text-muted">Media & Blog</a>
          </div>

          <div className="flex flex-col gap-5 col-span-2 lg:col-span-1">
             <span className="font-mono text-white mb-1 uppercase tracking-widest text-xs font-semibold">Legal</span>
             <a href="#" className="link-lift text-muted">Privacy Policy</a>
             <a href="#" className="link-lift text-muted">Terms & Conditions</a>
             <a href="#" className="link-lift text-muted">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          &copy; {new Date().getFullYear()} PearlX Infrastructure
        </p>
        <p className="font-sans text-xs text-muted font-light">
          Built with precision.
        </p>
      </div>

    </footer>
  );
}
