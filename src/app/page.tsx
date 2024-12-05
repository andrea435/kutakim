import Image from "next/image";
import HeroSection from "./components/herosection";
import React from 'react';
import TestimonialSection from "./components/testimonialssection";
import JoinSection from "./components/joinsection";
import Section from "./components/section";
import FooterSection from "./components/footer";

export default function Home() {
  return (
    <><HeroSection /><TestimonialSection /><JoinSection/><FooterSection/></>
  );
}
