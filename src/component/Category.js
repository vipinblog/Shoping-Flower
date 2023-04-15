import React from 'react';
import './Category.css';
import Rose from  './image/Rose.jpg';
import Roses from  './image/Roses.jpg';
import swift from  './image/swift.jpg';
import Sunflower from  './image/Sunflower.jpg';
import Bunch from './image/Bunch.jpg';
import Valeria from './image/Valeria.jpg';
import Shows from "./image/Shows.jpg";
import Showflower from "./image/Showflower.jpg";
import Jasmine from "./image/Jasmine.jpg";
import Hazelwood from "./image/Hazelwood.jpg";
import Leman from "./image/Leman.jpg";
import Camato from "./image/Camato.jpg";
 function category(props){
const changeGrade = (e) =>{
  props.changeGradeIndex(e.target.value)
} 
return(
 <div className='varieties'>
  <div className='varieties-1'>
  <img src={Rose} alt='description' />
  <h6 id='bright'>Bright N Beautiful</h6>
  <label>
    <input type='rating' name='star' id={props.grade} value={props.index} onClick={changeGrade}/>
    <svg width='58' height='58' viewBox='0 0 24 24' fill='none' stroke='#393939' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' style={props.style}>
    </svg>
  </label>
  </div>
  <div className='varieties-2'>
  <img src={Roses} alt='description'/>
  <h6 id='arrive'>New Arrival Flowers</h6>
  </div>  
  <div className='varieties-3'>
    <img src={swift} alt='description'/>
    <h6 className='beautiful'>Beautiful white roses</h6>
  </div>
  <div className='varieties-4'>
  <img src={Sunflower} alt='description'/>
  <h6 className='sunflower'>Beautiful Sunflower</h6>
  </div>
  <div className='varieties-5'>
  <img src={Bunch} alt='description'/>
   <h6>Bunch of Roses</h6>
  </div>
  <div className='varieties-6'> 
  <img src={Valeria} alt='description'/>
  <h6 className='basket'>Flower in Basket</h6>
  </div>
  <div className='varieties-7'>
  <img src={Shows} alt='description'/>
  <h6 className='luxury'>Luxury Collection</h6>
  </div>
  <div className='varieties-8'>
    <img src={Showflower} alt='description'/>
    <h6 className='product'>Luxury Flower</h6>
  </div>
  <div className='varieties-9'>
    <img src={Jasmine} alt='description'/>
    <h6 className='product1'>Collection of Jasmine</h6>
  </div>
  <div className='varieties-10'>
    <img src={Hazelwood} alt='description'/>
    <h6 className='product2'>Brightness of flower</h6>
  </div>
  <div className='varieties-11'>
    <img src={Leman} alt='description'/>
    <h6 className='product3'>Flower in a vase</h6>
  </div>
  <div className='varieties-12'>
    <img src={Camato} alt='description'/>
    <h6 className='product4'>Luxury collection of flower</h6>
  </div>
  
 </div>
)
}
export default category;