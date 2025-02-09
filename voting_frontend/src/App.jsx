import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Result from "./components/ResultComponent/Result.jsx";
import HomePage from "./components/HomePageContainer/HomePage";
import SignUp from "./components/Signup.jsx";
import CandidateValidation from "./components/Dashboard/AdminDashboard/CandidateValidation.jsx";
import RegisterNewParty from "./components/RegisterPoliticalParty/RegisterNewParty.jsx";
import Login from "./components/Login.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
// import Voting from "./components/Voting/Voting.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import NavbarDashboard from "./components/Dashboard/AdminDashboard/AdminNavbarDashboard.jsx";
import AdminDashBoardHome from "./components/Dashboard/AdminDashboard/AdminDashBoardHome.jsx";
import PoliticalPartyVerfication from "./components/Dashboard/AdminDashboard/PoliticalPartyVerfication.jsx";
import AddConsitituency from "./components/Dashboard/AdminDashboard/AddConsitituency.jsx";
import ViewFeedback from "./components/Dashboard/AdminDashboard/ViewFeedback.jsx";
import ScheduleElection from "./components/Dashboard/AdminDashboard/ScheduleElection.jsx";
import UserDashboard from "./components/Dashboard/UserDashboard/UserDashboard.jsx";
import UpcomingElections from "./components/Dashboard/UserDashboard/UpcomingElections.jsx";
import UserInfo from "./components/Dashboard/UserDashboard/UserInfo.jsx";
import VotingPage from "./components/Dashboard/UserDashboard/Voting.jsx";
import Voting from "./components/Dashboard/UserDashboard/Voting.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CandidateSignUp from "./components/Candidate/CandidateSignUp.jsx";

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
            <Route path="/login" element={<Login />} />
            <Route
              path="/registerPoliticalParty"
              element={<RegisterNewParty />}
            />
            <Route path="/validation" element={<CandidateValidation />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/feedback" element={<Feedback />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/registerPoliticalParty"
              element={<RegisterNewParty />}
            />
            {/* <Route path="/validation" element={<CandidateValidation />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/admin" element={<AdminDashBoardHome/>} >    
        
            </Route> */}

            <Route path="/admin" element={<AdminDashBoardHome />}>
              <Route
                path="party_validation"
                element={<PoliticalPartyVerfication />}
              />
              <Route
                path="candidate_validation"
                element={<CandidateValidation />}
              />
              <Route path="add_consitituency" element={<AddConsitituency />} />
              <Route path="schedule_elections" element={<ScheduleElection />} />
              <Route path="view_feedback" element={<ViewFeedback />} />
            </Route>
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/admin" element={<AdminDashBoardHome />} />

            <Route path="/voter" element={<UserDashboard />}>
              <Route path="voter" element={<UserInfo />} />
              <Route path="voting" element={<Voting />} />
              <Route
                path="upcoming-elections"
                element={<UpcomingElections />}
              />
            </Route>

            <Route path="/voting" element={<Voting />} />
          <Route path="/update-profile" element={<UpdateProfile/>}/>
          <Route path="/candidate-register" element={<CandidateSignUp/>}/>
          </Routes>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    
    </div>
  );
};
export default App;
