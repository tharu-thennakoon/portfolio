import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <About />
        </RevealOnScroll>
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <Work />
        </RevealOnScroll>
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <Education />
        </RevealOnScroll>
        <RevealOnScroll direction="up" distance={28} duration={0.85} threshold={0.06}>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
}

