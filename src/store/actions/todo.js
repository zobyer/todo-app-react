import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

export const addTaskToTodo = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTaskFromTodo = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const markTaskAsDone = (taskId) => {
  return {
    type: MARK_TASK_DONE,
    payload: taskId,
  };
};

export const editTaskFromTodo = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
