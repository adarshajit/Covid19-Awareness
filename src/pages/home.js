import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../Components/InfoSection/Data";
import { Navbar } from "../Components/Navbar";
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
      <InfoSection {...HomeObjThree} />
    </>
  );
};

export default Home;
