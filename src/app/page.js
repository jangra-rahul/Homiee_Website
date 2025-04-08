import Hero from "../../src/components/HomePage/Hero";
import OurVision from "../../src/components/HomePage/OurVision";
import WhyChoose from "../../src/components/HomePage/WhyChoose";
import FAQs from "../../src/components/HomePage/FAQs";
import OurServices from "../../src/components/HomePage/OurServices";
import Gallery from "../../src/components/HomePage/Gallery";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Gallery />
      <WhyChoose />
      <FAQs />
      <OurVision />
      <Footer />
    </>
  );
}
