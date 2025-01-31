import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Result from "./components/ResultComponent/Result.jsx";
import HomePage from "./components/HomePageContainer/HomePage";
import SignUp from "./components/Signup.jsx";
import CandidateValidation from './components/Admin/CandidateValidation';
import AdminHome from './components/Admin/AdminHome';
import RegisterNewParty from "./components/RegisterPoliticalParty/RegisterNewParty.jsx";
import Login from "./components/Login.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Voting from "./components/Voting/Voting.jsx";

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
            <Route path="/login" element={<Login />} />
            <Route path="/registerPoliticalParty" element={<RegisterNewParty />} />
            <Route path="/validation" element={<CandidateValidation />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feedback" element={<Feedback/>}/>
            


          </Routes>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
