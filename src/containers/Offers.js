import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item.js";

const Offers = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25"
    );
    setItems(response.data.offers);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="container-input box-shadow">
          <input
            className="input-search1"
            placeholder="Que recherchez-vous ?"
          ></input>
          <div className="input-search2">Rechercher</div>
        </div>
      </div>
      <div className="container-global">
        {items.map((item, index) => {
          // Ici le spread va transmettre tout le contenu de `offers` en tant que props au composant item

          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default Offers;
