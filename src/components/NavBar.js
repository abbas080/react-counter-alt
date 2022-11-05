import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="links"></div>
      <Link to="/" className="anchor">
        CounterOne
      </Link>
      <Link to="/CounterTwo" className="anchor">
        CounterTwo
      </Link>
    </div>
  );
}
