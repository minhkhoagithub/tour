import React from 'react'
import Hero from '../../components/Hero.jsx'
import FeatureDestination from '../../components/FeatureDestination.jsx'
import Features from '../../components/Features.jsx'
import GalleryComp from '../../components/GalleryComp.jsx'
import Banner from '../../components/Banner.jsx'
import Contact from '../../components/ContactComp.jsx'

export default function Home () {
    return (
        <>
     <Hero/>
     <FeatureDestination/>
     <Features/>
     <GalleryComp/>
     <Banner/>
     <Contact/>
    </>
    )
}