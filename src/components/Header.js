import React from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="nav1">
            <Link to={"/offers"}>
              <img className="logo" src={Logo} alt={Logo}></img>
            </Link>

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
              {/* Si user existe (si user déjà logué) tu notes "se déconnecter" et au clic tu délogues (gràce à la fonction logOut du parent App.js). */}
              {props.user ? (
                <div
                  onClick={() => {
                    props.logOut();
                  }}
                >
                  Se déconnecter
                </div>
              ) : (
                <div
                  onClick={() => {
                    // Si user n'existe pas (si user non logué) tu notes "se connecter" et au clic tu log (gràce à la fonction logIn du parent App.js). */}
                    props.logIn({
                      name: "Claire"
                    });
                  }}
                >
                  Se connecter
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};
export default Header;
