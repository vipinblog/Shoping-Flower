import React from 'react';

import Navbar from './component/Navbar';
import Category from './component/Category';
// import Slider from './component/Slider';
import Home from './component/Home';
 import Star from './component/Star';
// import './App.css';

function App() {
  return (
    <div>
       <Navbar/> 
       <Category/>  
       <Home/> 
       {/* <Slider/>  */}
       <Star/>
       
    </div>
  );
}

export default App;
