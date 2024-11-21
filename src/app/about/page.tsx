import Fotter from '@/component/Fotter'
import FoundersMessage from '@/section/about/FoundersMessage'
import Hero from '@/section/about/Hero'
import React from 'react'
import WhatGuidesUs from '@/section/about/whatGuidesUs'
import JourneySection from '@/section/about/mileStone'
import ImageCarousel from "@/component/Carousel";
import cards from '@/data/partnersCard';
export default function page() {
  return (
    <div>
        
        <Hero />
        <FoundersMessage />
        <FoundersMessage reverse={true}/>
        <WhatGuidesUs />
        <JourneySection />
        <ImageCarousel cards={cards.map(card => ({...card, img: card.img.src}))}
        <Fotter />
    </div>
  )
}
