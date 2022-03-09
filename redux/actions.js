export const GET_PRODUCTS = "GET_PRODUCTS";
export const CART_ITEMS = "CART_ITEMS";
export const REMOVE_CART_ITEM="REMOVE_CART_ITEM";
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
      type: CART_ITEMS,
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


