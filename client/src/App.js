import Nav from "./components/Nav";
import Home from "./pages/Home";
import BugList from "./pages/BugList";
import FishList from "./pages/FishList";
import CommentForm from "./pages/CommentForm";
import CommentDetails from "./pages/CommentDetails";
import BugDetails from "./pages/BugDetails";
import FishDetails from "./pages/FishDetails";
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
          <Route path="/bugs" element={<BugList />} />
          <Route path="/fishes" element={<FishList />} />
          <Route
            path="/bugs/:bugId/comment/:commentId"
            element={<CommentDetails />}
          />
          <Route path="/bugs/:id" element={<BugDetails />} />
          <Route path="/fishes/:id" element={<FishDetails />} />
          <Route path="/bugs/:id/comments" element={<CommentForm />} />
        </Routes>
      </main>
      <footer>
        <img src={"https://i.imgur.com/vjUbg9E.png"} alt="footer" />
      </footer>
    </div>
  );
};

export default App;
