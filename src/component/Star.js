// import React,{useState} from react;
import './star.css';

{/* <FontAwesomeIcon icon="fa-sharp fa-light fa-star" /> */}
// const Star = () => {
//             const [rating, setRating] = useState(0);
//             const [hover, setHover] = useState(0);
//             return (
//               <div className="star-rating">
//                 {[...Array(4)].map(( index) => {
//                   index += 1;
//                   return (
//                     <button
//                       type="button"
//                       key={index}
//                       className={index <= (hover || rating) ? "on" : "off"}
//                       onClick={() => setRating(index)}
//                       onMouseEnter={() => setHover(index)}
//                       onMouseLeave={() => setHover(rating)}
//                     >
//                       <span className="star">&#9733;</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             );
//           };
// export default Star;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./star.css";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};
  
export default Rate;