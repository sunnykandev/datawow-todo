import React from "react";

import { useAppSelector, useAppDispatch } from "../../../hooks/reduxHooks";
import { fetchAllTodos } from "../../../store/todoActions";
import styles from "./TodoList.module.css";

import Progress from "../Progress";

export default function TodoList() {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.todo.todoItems);

  React.useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Progress
        totalNum={allTodos.length}
        doneNum={allTodos.filter((item) => item.completed == true).length}
      />
      <div className={styles.todoListHeader}>
        <div className={styles.todoListTitle}>Tasks</div>
      </div>
    </div>
  );
}
