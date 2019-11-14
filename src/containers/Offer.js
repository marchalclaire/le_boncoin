import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <div>
        <Link to={"/offers"}>aller à la liste des annonces</Link>
      </div>
    </>
  );
};
export default Offer;
