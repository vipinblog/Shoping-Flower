import React from "react";
function Card (props){
    return (
        <>
        <div className="cards">
            <div className="card">
        <img src={props.imgsrc} className="card_img"/> 
        <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h6 className="card_title">{props.sname}</h6>

        </div>
            </div>
            
        </div>
        </>
    )
}
export default Card;