export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM="REMOVE_CART_ITEM";
export const UPDATE_TOTAL_PRICE="UPDATE_TOTAL_PRICE";
const API_URL = "https://fakestoreapi.com/products";
// const API_KEY = "e07e021506d25ba87814281a91ba6bcd";
// const PARAMS = "page=1";
// const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const GetProducts = () => {
  
  return (dispatch) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const AddToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    })
  };
};


export const removeFromCart = (item) => {
  alert("Product Removed")
  return (dispatch) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item,
    })
  };
};

export const updateTotalPrice = (quantity,item) => {
  console.log(quantity)
  return (dispatch) => {
    dispatch({
      type: UPDATE_TOTAL_PRICE,
      payload: item,
    })
  };
};


