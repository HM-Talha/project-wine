import "./App.css";
import React from "react";
import { Home } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProjectTwo from "./Components/projecttwo";
import Page from "./Pages/Page/index"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
