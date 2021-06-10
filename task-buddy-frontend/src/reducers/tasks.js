import {
  FETCH_ALL_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../constants";

const tasks = (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TASKS:
      return action.payload;
    case CREATE_TASK:
      return [...tasks, action.payload];
    case DELETE_TASK:
      return tasks.filter((task) => task._id !== action.payload);
    case UPDATE_TASK:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    default:
      return tasks;
  }
};

export default tasks;
