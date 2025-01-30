import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import HomePage from './components/HomePageContainer/HomePage';


const App = () => {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {/* Main content can go here 
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div> */}

      <HomePage/>
    </div>
  );
}

export default App;


