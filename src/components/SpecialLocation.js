import React from "react";
import "./specialLocation.css";

function SpecialLocation({ image, location, time }) {
  return (
    <div className="specialLocation">
      <img src={image} alt={location} />
      <div className="specialLocation_info">
        <h2>{location}</h2>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SpecialLocation;
