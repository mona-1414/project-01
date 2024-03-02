import React from "react";

const Card = ({title, description, imageUrl}) =>{
    return(
        <div className="card">
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn">Learn More</button>
        </div>
    );
}

export default Card;