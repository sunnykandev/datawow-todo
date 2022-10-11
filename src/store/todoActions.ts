import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";
import { RootState } from "./index";
import { ITodoItem } from "../models";
import todoService from "../service/todoService";

export const todoActions = todoSlice.actions;

export const fetchAllTodos = (): ThunkAction<void, RootState, unknown, AnyAction> => {

  return async (dispatch, getState) => {
    const response: ITodoItem[] = await todoService.fetchAllTodos();

    dispatch(
      todoActions.setTodoItems(response)
    );
  };
};
