import React from "react";
import Logo from "../logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="nav1">
            <img className="logo" src={Logo} alt={Logo}></img>

            <div className="button1">
              <svg
                className="symbol1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 3h18v18H3zM12 8v8m-4-4h8" />
              </svg>

              <span>Déposer une annonce</span>
            </div>
            <div className="button2">
              <span>
                <svg
                  className="symbol2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <span>Rechercher</span>
            </div>
          </div>
          <div className="nav2">
            <div className="container-text-nav2">
              <span className="icon-user"></span>
              <span>Se connecter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};
export default Header;
