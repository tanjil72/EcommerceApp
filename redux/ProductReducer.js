import { GET_PRODUCTS, CART_ITEMS } from "./actions";
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
    default:
      return state;
  }
}
export default ProductReducer;
