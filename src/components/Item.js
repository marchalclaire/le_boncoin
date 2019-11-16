import React from "react";

const Item = props => {
  return (
    <>
      <div className="offer-slide box-shadow">
        <div className="container-img bgc-silver">
          <img
            className="img-offer"
            src={props.pictures}
            alt={props.pictures}
          ></img>
        </div>
        <div className="text-offer">
          <span className="title">{props.title}</span>
          <span className="price">{props.price}€</span>
          <span className="date">{props.created}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
