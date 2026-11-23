import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CareerAreas from "@/components/CareerAreas";
import LabourMarket from "@/components/LabourMarket";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <CareerAreas />
        <LabourMarket />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
