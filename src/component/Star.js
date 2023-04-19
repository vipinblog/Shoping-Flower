import React from "react";
import { FaStar } from "react-icons/fa";
import './Star.css';

// const startGenerate = (numOfStarts = 5) => {
//   const [selected, setSelected] = useState(0);
//   return Array(numOfStarts)
//   .fill()
//   .map((item, i) =>( <Start key={i} 
//   selected = {selected > i}
//   OnSelected = {() => setSelected(i + 1)}/> )
// )
// };
// const Start = () => {
//   return <FaStar color={selected ? "yellow":"white"}
//    onClick={onSelected}/>; 
// };
// const Star = () =>{
//    return(
//     <div>
//     {startGenerate(10)}
//     </div>
//    );
// }
// export default Star;
const Star = () =>{
 return(
  <div>
    {[...Array(5)].map(star =>{
    <FaStar size={100}/>
})}
  </div>
 )
}
export default Star;