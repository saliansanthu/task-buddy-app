import { DELETE_PAGE, CREATE_PAGE, FETCH_ALL_PAGES } from "../constants";

const pages = (pages = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PAGES:
      return action?.payload;
    case CREATE_PAGE:
      return [...pages, action.payload];
    case DELETE_PAGE:
      return pages.filter((page) => page._id !== action.payload);
    default:
      return pages;
  }
};

export default pages;
