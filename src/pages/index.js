import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import PortFilter from "@/components/Filters/PortFilter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortFilter />
      <Card />
      <Footer />
    </>
  );
}
