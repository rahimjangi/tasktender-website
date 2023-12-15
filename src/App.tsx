import React from "react";
import NavigationBar from "./components/common/NavigationBar";
import MainBanner from "./components/sections/MainBanner";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <HomePage />
    </div>
  );
};

export default App;
