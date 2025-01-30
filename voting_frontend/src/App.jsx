import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Result from './components/ResultComponent/Result.jsx';

const App = () => {
  return (
    <div >
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
      
        <div className="row">
          <div className="col">

      <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col">
      <Routes>
        <Route path="/result" element={<Result />} />
      </Routes>
            
          </div>
        </div> <div className="row">
          <div className="col">
            
      <Footer/>
          </div>
        </div>


    </div>
  );
}

export default App;


