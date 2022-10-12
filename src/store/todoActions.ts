import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";
import { RootState } from "./index";
import { ITodoItem } from "../models";
import todoService from "../service/todoService";

export const todoActions = todoSlice.actions;

export const fetchAllTodos = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response: ITodoItem[] = await todoService.fetchAllTodos();

    dispatch(todoActions.setTodoItems(response));
  };
};

export const addTask = (
  title: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: ITodoItem = await todoService.addTask({
      title: title,
      completed: false,
    });

    dispatch(todoActions.addTodoItem(response));
  };
};

export const removeTodoItem = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response = await todoService.removeTask(id);
    if (response.status == 200) {
      dispatch(todoActions.removeTodoItem(id));
    }
  };
};

export const editTodoItem = (
  task: ITodoItem
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: ITodoItem = await todoService.editTask(task);
    dispatch(todoActions.editTodoItem(response));
  };
};
