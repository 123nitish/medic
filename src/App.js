import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reminder from "./Components/Reminder";
import Footer from "./Components/Footer";

function App() {
  // return (
  //   <>
  //     <Navbar title="Medic Helper" />

  //   </>
  // );

  return (
    <>
      <Router>
        <Navbar title="Medic Helper" />
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Routes>
            <Route
              exact
              path="/reminder"
              element={<Reminder/>}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
