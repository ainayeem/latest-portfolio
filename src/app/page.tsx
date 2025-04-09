import Certifications from "@/components/Certifications";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-custom-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Skills />
        <FeaturedProject />
        <Certifications />
      </div>
    </main>
  );
}
