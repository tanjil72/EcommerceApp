import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  UPDATE_QUANTITY,
} from "./actions";
const initialState = {
  //products: [],
  cart: [],
};
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_PRODUCTS:
    //   // console.log("Getting product")
    //   return { ...state, products: action.payload };
    case ADD_TO_CART:
      if (state.cart.some((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case REMOVE_CART_ITEM:
      const updatedCart = state.cart.filter(
        (item) => item.id != action.payload.id
      );
      return { ...state, cart: updatedCart };
    // console.log(state.cart)
    case UPDATE_QUANTITY:
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: action.payload.quantity,
                }
              : item
          ),
        };
      }

    default:
      return state;
  }
}
export default ProductReducer;
