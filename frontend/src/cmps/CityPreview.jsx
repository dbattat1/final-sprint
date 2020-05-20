import React from 'react'
// import { Link } from 'react-router-dom';

export function CityPreview(props) {
    const { city } = props;
    return (
        <li>
            {/* <Link to={`/${city._id}`} className=""> */}
            {city && <img src={city.thumbnailUrl} />}
               {city && <div>{city.name}</div>} 
            {/* </Link> */}
            
        </li>
    );
};
