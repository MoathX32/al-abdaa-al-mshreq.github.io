import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Projects } from "@/components/landing/Projects";
import { Gallery } from "@/components/landing/Gallery";
import { Team } from "@/components/landing/Team";
import { Partners } from "@/components/landing/Partners";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingSocial } from "@/components/landing/FloatingSocial";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Gallery />
        <Team />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingSocial />
    </>
  );
}
