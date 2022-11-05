import React from "react";
import { Routes, Route } from "react-router-dom";
import CounterTwo from "./components/CounterTwo";
import CounterOne from "./components/CounterOne";
import NavBar from "./components/NavBar";
import "./index.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<CounterOne />} />
        <Route path="/CounterTwo" element={<CounterTwo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
