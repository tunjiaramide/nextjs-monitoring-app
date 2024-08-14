import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <CTA />
        </div>
        <Footer />
    </>
    
  );
}
