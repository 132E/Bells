import Nav from "./components/Nav";
import Home from "./pages/Home";
import BugList from "./pages/BugList";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bug" element={<BugList />} />
        </Routes>
      </main>
      <footer>
        <img src={"https://i.imgur.com/vjUbg9E.png"} alt="footer" />
      </footer>
    </div>
  );
};

export default App;
