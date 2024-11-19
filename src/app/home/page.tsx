import React from "react";

import HomeHero from "../../section/landing/HomeHero";
import Nav from "@/component/Nav";
import ImageCarousel from "@/component/Carousel";
import AboutUs from "@/section/landing/AboutUs";
import Medicine from "@/section/landing/medicine";
import Products from "@/section/landing/products";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeHero />
      <ImageCarousel />
      <AboutUs />
      <Medicine />
      <Products />
    </div>
  );
}
