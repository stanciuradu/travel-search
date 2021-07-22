import React from "react";
import "../components/TravelItem.css";
import { Link } from "react-router-dom";

function TravelItem(props) {
  const { image, name } = props;
  return (
    <div className="travel-item">
      <img src={image} alt="travel" />
      <h1>{name}</h1>
      <Link to="/details">
        <button type="button" className='btn btn-danger'>Details</button>
      </Link>
    </div>
  );
}

export default TravelItem;
