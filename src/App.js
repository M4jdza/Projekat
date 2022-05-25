import Navbar from "./navBar";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
