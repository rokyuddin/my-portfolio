import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/ui/footer";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Services",
    link: "#services",
  },
];

export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen bg-zinc-900">
      <FloatingNav navItems={navItems} />
      <Hero />
      {/* <Experiences /> */}
      <About />
      {/* <Projects /> */}
      <Services />
      <Footer />
    </div>
  );
}
