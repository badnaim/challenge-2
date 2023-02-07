import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => navigate("/html")}>html</button>
      <button onClick={() => navigate("/css")}>css</button>
      <button onClick={() => navigate("/javascript")}>javascript</button>
      <button onClick={() => navigate("/react")}>react</button>
    </div>
  );
}
