import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/common/NavigationBar";
import HomePage from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
