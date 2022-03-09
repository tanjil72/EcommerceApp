import { GET_PRODUCTS, CART_ITEMS,REMOVE_CART_ITEM } from "./actions";
const initialState = {
  products: [],
  cart: [],
};
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case CART_ITEMS:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_CART_ITEM:
      const updatedCart = state.cart.filter( item=> item.id != action.payload.id);
      return{...state,cart:updatedCart}
      

    default:
      return state;
  }
}
export default ProductReducer;
