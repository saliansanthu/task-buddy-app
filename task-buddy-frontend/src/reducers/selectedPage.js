import { SELECT_PAGE, UNSELECT_PAGE } from "../constants/";

const selectedPage = (selectedPage = null, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return action.payload;
    case UNSELECT_PAGE:
      return null;
    default:
      return selectedPage;
  }
};

export default selectedPage;
