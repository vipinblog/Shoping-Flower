import React from "react";
import './Card.css';
function Card (props){

    return (
    
        
        <div className="cards">
            <div className="product">
        <img src={props.imgsrc} className="card_img"></img> 
        <div className="card_info">
        <h6 className="card_category">{props.title}</h6>
           <button className="Add-to-button">add to cart</button>
        </div>
            </div>
            
        </div>
        
        
    )
}
export default Card;
