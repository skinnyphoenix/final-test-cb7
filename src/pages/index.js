import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import PortFilter from "@/components/Filters/PortFilter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortFilter />
      <Card />
    </>
  );
}
