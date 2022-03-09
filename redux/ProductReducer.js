import { GET_PRODUCTS, ADD_TO_CART,REMOVE_CART_ITEM,UPDATE_TOTAL_PRICE } from "./actions";
const initialState = {
  products: [],
  cart: [],
};
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      if (state.cart.some(item => item.id === action.payload.id)) {
        return state;
      }else{
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case REMOVE_CART_ITEM:
      const updatedCart = state.cart.filter( item=> item.id != action.payload.id);
      return{...state,cart:updatedCart}
    case UPDATE_TOTAL_PRICE:
      // if (state.cart.find(item => item.id === action.payload.id)) {
      //   let price=action.payload.price;
      //   let quantity=action.payload.quantity;
      //   return {}
      // }


    default:
      return state;
  }
}
export default ProductReducer;
