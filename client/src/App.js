import Nav from "./components/Nav";
import Home from "./pages/Home";
import BugList from "./pages/BugList";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bug" element={<BugList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
