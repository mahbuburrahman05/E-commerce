import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import FeaturedSection from '../components/FeaturedProducts'
import HomeBanner from '../components/HomeBanner'
import FlashSaleSection from '../components/FlashSaleSection'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
        <Header />
        <Category />
        <FeaturedSection />
        <HomeBanner />
        <FlashSaleSection />
        <Subscribe />
    </div>
  )
}

export default Home