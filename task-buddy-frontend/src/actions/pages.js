import * as API from "../api";
import { FETCH_ALL_PAGES, CREATE_PAGE, DELETE_PAGE } from "../constants";

export const getPages = () => async (dispatch) => {
  try {
    const { data } = await API.getPages();
    dispatch({ type: FETCH_ALL_PAGES, payload: data.pages });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPage = (page) => async (dispatch) => {
  try {
    const { data } = await API.createPage(page);
    dispatch({ type: CREATE_PAGE, payload: data.page });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePage = (_id) => async (dispatch) => {
  try {
    await API.deletePage(_id);
    dispatch({ type: DELETE_PAGE, payload: _id });
  } catch (error) {
    console.log(error.message);
  }
};
