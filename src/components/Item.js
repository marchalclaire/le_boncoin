import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  return (
    <>
      <Link className="link" to={"/offer/" + props._id}>
        <div className="offer-slide box-shadow">
          <div className="container-img bgc-silver">
            <img
              className="img-offer"
              src={props.pictures[0]}
              alt={props.pictures}
            ></img>
          </div>
          <div className="text-offer">
            <span className="title">{props.title}</span>
            <span className="price">{props.price}€</span>
            <span className="date">{props.created}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
