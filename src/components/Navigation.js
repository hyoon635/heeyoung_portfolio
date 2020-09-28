import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
    const openMenu = () => {
        const menu = document.getElementById("hambugerBtn");
        const menuList = document.getElementById("menuList");
        const overlay = document.getElementById("overlay");
        menu.classList.toggle("open");
        menuList.classList.toggle("active");
        overlay.classList.toggle("active");
        console.log("click!!")
    }

  return (
    <div className="navigation">
      <div className="bar">
        <span className="name">
          <Link to="/">Yoon Heeyoung</Link>
        </span>

        <div id="hambugerBtn" className="hambuger" onClick={openMenu}>
          <div className="hambuger__line half start"></div>
          <div className="hambuger__line"></div>
          <div className="hambuger__line half end"></div>
        </div>
      </div>

      <nav id="menuList" className="menu fixed">
        <ul className="menu__list">
          <li className="menu__list__item">
            <Link to="/about" onClick={openMenu}>
              About
            </Link>
          </li>
          <li className="menu__list__item">
            <Link to="/projects" onClick={openMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      <div id="overlay" className="backdrop"></div>
    </div>
  );
}

export default Navigation;
