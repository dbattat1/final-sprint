import React from "react";
import { Link } from "react-router-dom";

export function CityPreview(props) {
  const { city } = props;
  
  return (
    <Link to={`/${city._id}`}>
      <li
        className="city-card"
        style={{ backgroundImage: `url(${city.thumbnailUrl})` }}
      >
        <div className="city-card-name">{city.name}</div>
      </li>
    </Link>
  );
}
