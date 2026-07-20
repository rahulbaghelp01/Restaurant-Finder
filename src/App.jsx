import Home from "./pages/Home.jsx";
import Favourites from "./pages/Favourites.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favourites" element={<Favourites />} />
    </Routes>
  );
}

  
