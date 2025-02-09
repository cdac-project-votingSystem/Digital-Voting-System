import React from 'react'
import HomePageCarousel from './HomePageCarousel';
import Header from '../Header';
import HomePageAbout from './HomePageAbout';
import HomeText from './HomeText';
import NewPartyRegisterBtn from './NewPartyRegisterBtn';
import HomePageMyths from './HomePageMyths';
import Footer from '../Footer';
import NewCandidateRegister from './NewCandidateRegister';

const HomePage = () => {
  return (
    <div>
      {/* <Header/> */}
      <br />
      <br />
        <HomePageCarousel/>
        <HomePageAbout/>
        <NewCandidateRegister/>
        <br />
        <HomeText/>
        <br />
        <NewPartyRegisterBtn/>
        <HomePageMyths/>
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage
