import React from "react";
// import Nav from "./Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Nav/Navbar";
import Nav from "./Components/Nav/Nav_old";
import Footer from "./Components/Footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* this nav us old */}
      {/* <Nav /> */}
      <MainPage />
      <Footer />
    </div>
  );
}
