import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <div className="container-global">
        <div className="wrapper-offer">
          <div className="container-left">
            <div className="container-1 box-shadow">
              <div className="container-offer-img bgc-silver">
                <img
                  className="offer-img"
                  src="https://img1.leboncoin.fr/ad-large/c15ad91bcbe88a4f109403f3bd8d8041d010683a.jpg"
                  alt="img-offer"
                ></img>
              </div>
              <div className="offer-description">
                <div className="title-price">
                  <div className="title">Blouson ski 4 ans</div>
                  <div className="price">8€</div>
                </div>
                <div className="date">
                  <div>13/11/2019</div>
                </div>
              </div>
            </div>
            <div className="container-2">
              <div className="container-description">
                <div className="description bold">Description</div>
                <p className="description">
                  Vends blouson de ski fille de couleur rose, en excellent état,
                  taille 2 ans, de la marque Go Sport. A venir chercher au Métro
                  Strasbourg St Denis.
                </p>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="container-4 box-shadow">
              <div className="container-4_1">
                <div className="user bold">AlexD</div>
                <div className="user-info bold blue">17 annonces en ligne</div>
              </div>
              <div className="container-4_2">
                <div className="button3">
                  <span className="icon-cart"></span>
                  <span>Acheter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/offers"}>aller à la liste des annonces</Link>
      </div>
    </>
  );
};
export default Offer;
