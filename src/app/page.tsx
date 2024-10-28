"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/ui/footer";
import { navItems } from "@/data";

export default function HomePage() {
  return (
    <div
      data-testid="top"
      id="top"
      className="relative  min-h-screen bg-zinc-900 text-white overflow-hidden"
    >
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}
