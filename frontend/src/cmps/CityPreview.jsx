import React from "react";
import { Link } from "react-router-dom";

export function CityPreview(props) {
  const { city } = props;

  return (
    <li className="city-card" style={{backgroundImage: `url(${city.thumbnailUrl})`}}>
      <Link to={`/${city._id}`}>
          <div className="city-card-name">{city.name}</div>
      </Link>
    </li>
  );
}
