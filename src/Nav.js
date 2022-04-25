import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import "./styles.css";

const navSection = [
  { name: "Education", icon: ["fas", "graduation-cap"] },
  { name: "Languages", icon: ["fas", "globe-americas"] },
  { name: "Technologies", icon: ["fas", "atom"] },
  { name: "Projects", icon: ["fas", "code"] },
  { name: "Contact", icon: ["fas", "envelope"] }
];

function NavItems(arr, icons) {
  return arr.map((item, ix) => (
    <div className="nav-icon" key={ix}>
      <Link to={item.name}>
        <FontAwesomeIcon icon={item.icon} size="2x" fixedWidth />
        <li>{item.name}</li>
      </Link>
      <br />
    </div>
  ));
}

export default function Nav() {
  return (
    <>
      <div
        className="my-navbar w3-sidebar w3-bar-block w3-black"
        style={{
          width: "15vh"
        }}
      >
        <div className="hamb" style={{ display: "none" }}>
          <button>=</button>
        </div>
        <nav>
          <ul>{NavItems(navSection)}</ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
