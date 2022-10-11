import { ITodoItem, ITodoListState } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodoListState = {
  todoItems: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTodoItems(state, action: PayloadAction<ITodoItem[]>) {
      state.todoItems = action.payload;
    },
    addTodoItem(state, action: PayloadAction<ITodoItem>) {
      state.todoItems.push(action.payload);
    },
    editTodoItem(state, action: PayloadAction<ITodoItem>) {
      const itemIndex = state.todoItems.findIndex(item => item.id == action.payload.id);
      state.todoItems.splice(itemIndex, 1, action.payload);
    },
    removeTodoItem(state, action: PayloadAction<string>) {
      state.todoItems = state.todoItems.filter(item=>item.id != action.payload);
    },
  },
});
export default todoSlice;
