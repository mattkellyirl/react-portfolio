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
      <Hero />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
