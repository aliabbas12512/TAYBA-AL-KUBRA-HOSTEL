import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import DocumentMeta from "@/components/DocumentMeta";

export default function Home() {
  return (
    <>
      <DocumentMeta />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Rooms />
        <Facilities />
        <Gallery />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
