import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AziendeConsultate from "./components/AziendeConsultate";
import CustomNavbar from "./components/Navbar";
/* import UserProfile from "./components/ProfilepageMain"; */
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />

        <Routes>

          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/profile/:user.id" element={<UserProfile />}></Route> */}
        </Routes>

        <AziendeConsultate />
      </BrowserRouter>
    </div>
  );
}

export default App;
