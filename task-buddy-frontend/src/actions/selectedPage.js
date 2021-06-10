import { SELECT_PAGE, UNSELECT_PAGE } from "../constants";

export const selectPage = (page) => (dispatch) => {
  dispatch({ type: SELECT_PAGE, payload: page });
};

export const unSelectPage = (page) => (dispatch) => {
  dispatch({ type: UNSELECT_PAGE });
};
