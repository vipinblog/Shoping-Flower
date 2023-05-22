import React from "react";
import './Card.css';
function Card (props){

    return (
        <>
        <div className="cards">
            <div className="card">
        <img src={props.imgsrc} className="card_img"/> 
        <div className="card_info">
            <h6 className="card_category">{props.title}</h6>
            

        </div>
            </div>
            
        </div>
        </>
        
    )
}
export default Card;