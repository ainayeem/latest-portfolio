import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <main className="relative bg-custom-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <FeaturedProject />
      </div>
    </main>
  );
}
