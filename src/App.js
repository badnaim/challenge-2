import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Css from "./components/subcomps/Css";
import Html from "./components//subcomps/Html";
import Javascript from "./components//subcomps/Javascript";
import React from "./components//subcomps/React";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <div className="mainInformation">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/css" element={<Css />}></Route>
          <Route path="/html" element={<Html />}></Route>
          <Route path="/javascript" element={<Javascript />}></Route>
          <Route path="/react" element={<React />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
