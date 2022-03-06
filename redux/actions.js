import axios from "axios";
export const GET_MOVIES = "GET_MOVIES";
const API_URL ="https://fakestoreapi.com/products";
const API_KEY = "e07e021506d25ba87814281a91ba6bcd";
const PARAMS = "page=1";
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
