import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app container mw-100 px-0 mx-0">
      <Navbar />
      <Header />
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default App;
