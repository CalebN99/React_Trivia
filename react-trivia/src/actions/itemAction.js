import axios from "axios";
import { GET_ITEMS, ADD_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/posts").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
export const addItem = item => dispatch => {
  axios.post("/api/posts", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
