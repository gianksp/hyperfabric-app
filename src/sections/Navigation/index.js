import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Container } from "reusecore/Layout";
import logo from "assets/images/logo-white.png";

import Data from "./utility/data.js";
import ScrollspyMenu from "./utility/ScrollspyMenu";
import NavigationWrap from "./navigation.style";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const header = document.getElementById("navbar");

    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //[expand, scroll]
  return (
    <NavigationWrap
      id="navbar"
      className={`nav-block`}
    >
      <Container>
        <div className="navbar-wrap">
          <Link href="/">
            <a className="logo">
              <img src={logo} alt="prime app landing" />
            </a>
          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
            />
          </nav>
        </div>
      </Container>
    </NavigationWrap>
  );
};

export default Navigation;
