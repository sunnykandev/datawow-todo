import { ITodoItem, ITodoListState } from "../models";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodoListState = {
  todoItems: [],
  error: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setTodoItems(state, action: PayloadAction<ITodoItem[]>) {
      state.todoItems = action.payload;
    },
    addTodoItem(state, action: PayloadAction<ITodoItem>) {
      state.todoItems.push(action.payload);
    },
    editTodoItem(state, action: PayloadAction<ITodoItem>) {
      const itemIndex = state.todoItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.todoItems.splice(itemIndex, 1, action.payload);
    },
    removeTodoItem(state, action: PayloadAction<string>) {
      state.todoItems = state.todoItems.filter(
        (item) => item.id != action.payload
      );
    },
  },
});
export default todoSlice;
