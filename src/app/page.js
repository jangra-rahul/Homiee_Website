import Hero from "../../src/components/HomePage/Hero";
import OurVision from "../../src/components/HomePage/OurVision";
import WhyChoose from "../../src/components/HomePage/WhyChoose";
import FAQs from "../../src/components/HomePage/FAQs";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <OurVision />
      <WhyChoose />
      <FAQs />
      <Footer />
    </>
  );
}
