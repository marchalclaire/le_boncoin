import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [picture, setPicture] = useState("");
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/" + params.identifiant
    );
    setItem(response.data);
    setPicture(response.data.pictures[0]);
    setUser(response.data.creator.account.username);

    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-global">
        <div className="wrapper-offer">
          <div className="container-left">
            <div className="container-1 box-shadow">
              <div className="container-offer-img bgc-silver">
                <img className="offer-img" src={picture} alt="img-offer"></img>
              </div>
              <div className="offer-description">
                <div className="title-price">
                  <div className="title">{item.title}</div>
                  <div className="price">{item.price}€</div>
                </div>
                <div className="date">
                  <div>{item.created}</div>
                </div>
              </div>
            </div>
            <div className="container-2">
              <div className="container-description">
                <div className="description bold">Description</div>
                <p className="description">{item.description}</p>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="container-4 box-shadow">
              <div className="container-4_1">
                <div className="user bold">{user}</div>
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
    </>
  );
};
export default Offer;
