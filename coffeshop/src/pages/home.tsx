import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import AboutCompany from '../components/aboutCompany'
import HomeProducts from '../components/homeProducts'
import Stories from '../components/stories'
import AboutUs from '../components/aboutUs'
import HomeVideo from '../components/homeVideo'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutCompany/>
    <HomeProducts/>
    <Stories/>
    <AboutUs/>
    <HomeVideo/>
    <Footer/>
    </>
  )
}

export default Home