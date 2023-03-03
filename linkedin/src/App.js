import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AziendeConsultate from "./components/AziendeConsultate";
import CustomNavbar from "./components/Navbar";
/* import UserProfile from "./components/ProfilepageMain"; */

import Profile from "./components/Profile";
import Home from "./components/Home";
import ExpSolo from "./components/ExpSolo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:user.id" element={<Profile />}></Route>
          <Route path="/profile/:user.id/:expId" element={<ExpSolo />}></Route>

          {/* <Route path="/profile/:user.id" element={<UserProfile />}></Route> */}
        </Routes>
        <Footer />
        {/* <AziendeConsultate></AziendeConsultate> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
