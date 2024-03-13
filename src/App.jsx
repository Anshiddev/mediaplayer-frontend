import { useState } from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="dash" Component={Dashboard} />
        <Route path="his" Component={History} />
        <Route path="" Component={Landing} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
