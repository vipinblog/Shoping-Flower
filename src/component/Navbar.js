import React from 'react';
import './Navbar.css';
import Lily from "./image/Lily.jpg";
import Lotus from "./image/Lotus.jpg";
import Plant from "./image/Plant.jpg"
import Show from "./image/Show.jpg";


function Navbar(){
return(
  <>
    <nav className='container'>
      <div className='main'>
    <ul>
       <li><a href='New Collection'>New Collection</a></li>
       <li><a href='Category'>Category</a></li>
        <li><a href='Home'>Home</a></li>
    </ul>
    </div>  
    </nav>
    <br/><br/>
    <div className='flowers'>
    <div className='flower-1'>
    <img src={Lotus} alt="description"/>
    </div>
    <div className='flower-2'>
    <img src={Lily} alt='img-decription'/>
    </div>
    <div className='flower-3'>
    <img src={Show} alt='img-descriptions'/>
    </div>
    <div className='flower-4'>
      <img src={Plant} alt='img-description'/>
    </div>
    </div>
    <div className='ellipse'></div>
    <div className='ellipse'></div>
   
    

    <section className='header'>
    <p className='font'>largest flower supplier</p>
    <h1 className='paragraph'>Flowers</h1> 
    <p className='content'>speak the language of LOVE</p>
    <p className='space'>Iargk dpsuk aiar sdt okgt Ug cgujdot.<br></br> ealsgetgt dpdsedlj gidt ud lal ldsi gigkgltuk</p>
    <div className='btn-container'>
    <button className='shop-now '>Shop Now</button>
    <button className='new-word'>New Collection</button>
    </div>
    </section>
     
    </>
       
)

}
export default Navbar;