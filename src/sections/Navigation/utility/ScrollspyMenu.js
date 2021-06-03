import React from "react";
import { Link as OnepageLink } from "react-scroll";
import Link from 'next/link';

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }

  const redir = () => {
    window.open('https://github.com/gianksp/hyperfabric-app', '_blank');
  }

  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <OnepageLink
            activeClass="nav-active"
            to={menu.path}
            spy={true}
            smooth={true}
            offset={parseInt(menu.offset)}
            duration={700}
          >
            {menu.name}
          </OnepageLink>
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                  <li key={i}>
                    <Link href={subItem.path}>
                      <a>{subItem.name}</a>
                    </Link>
                  </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li>
        <button className="nav__button" on onClick={redir}>
          Git Source
        </button>
      </li>
    </ul>

  );
};

export default ScrollspyMenu;
