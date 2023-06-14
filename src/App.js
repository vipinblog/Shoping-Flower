import React from 'react';
import Actions from './Services/Actions';
import Navbar from './component/Navbar';
import  Work from './component/Work';
import Card from './component/Card';
import Data from './component/Data';
// import Category from './component/Category';
// import Slider from './component/Slider';
// import Home from './component/Home';
//  import Star from './component/Star';
// import './App.css';

function App() {
  return (
    <div>
       <Navbar/>
       <Work/>
       <Card/>
       <Data/>
       <Actions/>
       {/* <Category/>   */}
       {/* <Home/>  */}
       {/* <Slider/>  */}
       {/* <Star/> */}
       
    </div>
  );
}

export default App;
