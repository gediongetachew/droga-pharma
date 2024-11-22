import Hero from '@/section/companies/Hero'
import React from 'react'
import cards from '@/data/carouselCards'
import ImageCarousel from '@/component/Carousel'
import GetInTouch from '@/section/landing/getInTouch'
import Fotter from '@/component/Fotter'


export default function page() {
  return (
    <div>
       
        <Hero />
        <ImageCarousel cards={cards.map(card => ({...card, img: card.img.src}))} />
        <GetInTouch />
        <Fotter />  
    </div>
  )
}
