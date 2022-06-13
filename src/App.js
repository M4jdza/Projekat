import React from 'react';
import Navbar from "./navBar";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Zaglavlje from "./Zaglavlje";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/Zaglavlje" exact element={<Zaglavlje />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
