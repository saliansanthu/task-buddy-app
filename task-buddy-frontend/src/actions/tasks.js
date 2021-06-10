import * as API from "../api";
import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_ALL_TASKS,
  UPDATE_TASK,
} from "../constants";

export const getTasks = (selectedPage) => async (dispatch) => {
  try {
    const { data } = await API.getTasks(selectedPage._id);
    dispatch({ type: FETCH_ALL_TASKS, payload: data.page.tasks });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (selectedPage, task) => async (dispatch) => {
  try {
    const { data } = await API.createTask(selectedPage._id, task);
    dispatch({ type: CREATE_TASK, payload: data.task });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (selectedPage, task) => async (dispatch) => {
  try {
    await API.deleteTask(selectedPage._id, task._id);
    dispatch({ type: DELETE_TASK, payload: task._id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTask =
  (selectedPage, selectedTask, updatedTask) => async (dispatch) => {
    try {
      const { data } = await API.updateTask(
        selectedPage._id,
        selectedTask._id,
        updatedTask
      );
      dispatch({ type: UPDATE_TASK, payload: data.task });
    } catch (error) {
      console.log(error.message);
    }
  };
