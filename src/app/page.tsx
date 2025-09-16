import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Metrics from "../components/Metrics";
import TechCarousel from "../components/TechCarousel";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Metrics />
        <TechCarousel />
         <Testimonials />
         <FAQ />
         <Contact />
         <Footer />
      </main>
    </>
  );
}
