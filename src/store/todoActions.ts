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

export const removeTodoItem = (id: string) => {
  return todoActions.removeTodoItem(id);
};

export const editTodoItem = (task: ITodoItem) => {
  return todoActions.editTodoItem(task);
};
