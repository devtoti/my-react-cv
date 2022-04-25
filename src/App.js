import "./styles.css";
import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Nav";

export default function App() {
  let achs = [
    "beautiful apps",
    "top quality projects",
    "fresh new ideas",
    "interesting stuff"
  ];

  const [displayTxt, setDisplayTxt] = useState("great things");
  let c = 0;
  let n = achs.length;
  useEffect(() => {
    const interval = setInterval(() => {
      c++;
      setDisplayTxt(achs[c % n]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Nav />
      {/* <h3>Let us work together so we can achieve:</h3>
      <h4>{displayTxt}</h4> */}
    </div>
  );
}
