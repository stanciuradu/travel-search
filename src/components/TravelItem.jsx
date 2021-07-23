import React from "react";
import "../components/TravelItem.css";

function TravelItem(props) {
  const { image, name } = props;
  return (
    <div className="travel-item">
      <img src={image} alt="travel" />
      <h1>{name}</h1>
    </div>
  );
}

export default TravelItem;
