import React from "react";
import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/FooterSection";
import { ThemeProvider } from "./components/Main/ThemeContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
