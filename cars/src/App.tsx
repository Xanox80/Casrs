import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/FooterSection";
import AboutUs from "./components/About/AboutUs";
import { ThemeProvider } from "./components/Main/ThemeContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
