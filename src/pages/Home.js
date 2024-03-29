import React, { useState } from "react";
import Footer from "../Components/FooterSection";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../Components/InfoSection/Data";
import { Navbar } from "../Components/Navbar";
import Services from "../Components/Services";
import Sidebar from "../Components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <Services />
      <InfoSection {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
