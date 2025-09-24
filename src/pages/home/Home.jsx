import React from 'react'
import Hero from '../../components/Hero'
import FeatureDestination from '../../components/FeatureDestination.jsx'
import Features from '../../components/Features'
import GalleryComp from '../../components/GalleryComp'
import Banner from '../../Components/Banner'
import Contact from '../../Components/ContactComp'

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