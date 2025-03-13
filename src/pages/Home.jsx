import React from 'react'
import Header from './component/Header'
import HeroSection from './Component/HeroSection'
import Section from './Component/Section'
import TrustedBy from './Component/TrustedBy'
import Employe from './Component/Employe'
import Talior from './Component/Talior'
import Customer from './Component/Customer'
import Recantjobs from './Component/Recantjobs'
import Footers from './Component/Footers'
import Hero from './Component/hero'

const Home = () => {
  return (
    <>
          <Header />
          <Hero />
          <Section />
          <TrustedBy />
          <HeroSection />
          <Employe />
          <Talior />
          <Customer />
          <Recantjobs />
          <Footers />
    </>
  )
}

export default Home