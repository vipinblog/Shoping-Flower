// import { type } from "@testing-library/user-event/dist/type"
import { ADD_TO_CART } from "../Constant"
export const addToCart=(data)=> {
    console.warn("warn",data)
    return{
    type:ADD_TO_CART,
    data:data
}
}
/*export const removeToCart=(data)=> {
    type:"REMOVE_TO_CART";
    data:data;
}*/