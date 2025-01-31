import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Result from "./components/ResultComponent/Result.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import CandidateCard from "./components/card/CandidateCard.jsx";
import VoterCard from "./components/card/VoterCard.jsx";
import Validation from "./pages/Validation.jsx";
import CandidateValidation from "./pages/CandidateValidation.jsx";
import VoterValidation from "./pages/VoterValidation.jsx";

import HomePage from "./components/HomePageContainer/HomePage";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/result" element={<Result />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/validation" element={<Validation />} />
            <Route
              path="/candidateValidation"
              element={<CandidateValidation />}
            />
            <Route path="/voterValidation" element={<VoterValidation />} />
          </Routes>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
      {/* <LinkCard color="#e4d9df" text="Admin login"/> */}
    </div>
  );
};

export default App;
