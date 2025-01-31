import React from 'react'
import HomePageCarousel from './HomePageCarousel';
import Header from '../Header';
import HomePageAbout from './HomePageAbout';
import HomeText from './HomeText';
import NewPartyRegisterBtn from './NewPartyRegisterBtn';
import HomePageMyths from './HomePageMyths';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <div>
      {/* <Header/> */}
      <br />
      <br />
      <HomePageCarousel/>
        <HomePageAbout/>
        <HomeText/>
        <br />
        <NewPartyRegisterBtn/>
      <HomePageMyths/>
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage
