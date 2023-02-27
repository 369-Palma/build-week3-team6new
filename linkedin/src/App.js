import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AziendeConsultate from "./components/AziendeConsultate";
import CustomNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <AziendeConsultate></AziendeConsultate>
    </div>
  );
}

export default App;
