import Image from "next/image";
import Navbar from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PreLoader from './components/PreLoader';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main>
    
      {/* <PreLoader /> */}
      <Navbar />
      <Hero />
      <Services />
      <About /> 
      <CTA />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}
