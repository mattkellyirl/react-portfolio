import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Work from "../Work";
import Contact from "../Contact";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
