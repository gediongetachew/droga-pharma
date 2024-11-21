import Fotter from '@/component/Fotter'
import FoundersMessage from '@/section/about/FoundersMessage'
import Hero from '@/section/about/Hero'
import React from 'react'
import WhatGuidesUs from '@/section/about/whatGuidesUs'
import JourneySection from '@/section/about/mileStone'
export default function page() {
  return (
    <div>
        
        <Hero />
        <FoundersMessage />
        <FoundersMessage reverse={true}/>
        <WhatGuidesUs />
        <JourneySection />
        <Fotter />
    </div>
  )
}
