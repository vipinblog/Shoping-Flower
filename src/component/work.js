import React from "react";
import Burden from './image/Burden.jpg';
import Bunch from './image/Bunch.jpg' ;
import Shows from './image/Shows.jpg';
import Lily from './image/Lily.jpg' ;
import Swift from './image/Swift.jpg';
import Valeria from './image/Valeria.jpg';
import Jhon from './image/Jhon.jpg';
import Leman from './image/Leman.jpg';
// import Jasmine from './image/Jasmine.jpg';
// import Hazelwood from './image/Hazelwood.jpg';
// import ReactDOM from "react-dom";
import Card from "./Card";
import './Card.css';
const Work =() =>{
    return (
        
  <div className="Cart">
    <Card imgsrc = {Burden} 
      title = "The Beautiful Flower"
    />



    <Card imgsrc={Bunch}  
     title="The Beautiful Roses"
     
    />

  
      <Card imgsrc={Shows}  
     title="The Sunflower"
    />
  
  
      <Card imgsrc={Lily}  
     title="The Lily Flower"
    />
  
   < Card imgsrc={Swift}  
    title="The Beautiful Flower"
    
  />
  
  
   <Card imgsrc = {Valeria} style={{height:"100px"}}
   title="Luxury Roses"
   />
  
  
   <Card imgsrc={Jhon}   
  title="Luxury Flower" 
   />
  
  
   <Card imgsrc = {Leman}  
  title="Brightness of flower"
   />
  
  </div>

)


}

export default Work;