import React from "react";

import HomeHero from "../../section/landing/HomeHero";
import Nav from "@/component/Nav";
import ImageCarousel from "@/component/Carousel";
import AboutUs from "@/section/landing/AboutUs";
import Medicine from "@/section/landing/medicine";
import Products from "@/section/landing/products";
import Media from "@/section/landing/media";
import TestimonialSwiper from "@/components/TestimonialSwiper";
import GetInTouch from "../../section/landing/getInTouch";
import Footer from "../../component/Fotter";
import cards from "@/data/carouselCards";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ImageCarousel cards={cards.map(card => ({...card, img: card.img.src}))} />
      <AboutUs />
      <Medicine />
      <Products />
      <Media />
      <TestimonialSwiper />
      <GetInTouch />
      <Footer />
    </div>
  );
}
