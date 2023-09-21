import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Information2 from "./components/information2";
import Feature from "./components/Features";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <Information2 />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
