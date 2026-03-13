import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-moss selection:text-cream relative overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        <Features />
        <Philosophy />
        <Protocol />
      </main>

      <Footer />
    </div>
  );
}

export default App;
