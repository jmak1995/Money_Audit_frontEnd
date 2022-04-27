import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddInfo from "./pages/AddInfo";
import React from "react";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/addInfo" element={<AddInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
