import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { MenuSection } from "./components/Menu/MenuSection";
import { OffersSection } from "./components/Offers/OffersSection";
import { AboutSection } from "./components/About/AboutSection";
import { TestimonialsSection } from "./components/Testimonials/TestimonialsSection";
import { ContactSection } from "./components/Contact/ContactSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <Hero />
        <MenuSection />
        <OffersSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;