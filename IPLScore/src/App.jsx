// import "./styles.css";
import Header from "./components/header.jsx"; // or the correct casing

import HomePage from "./components/page/HomePage.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
