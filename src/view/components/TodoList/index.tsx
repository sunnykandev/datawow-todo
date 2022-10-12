import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useAppSelector, useAppDispatch } from "../../../hooks/reduxHooks";
import {
  fetchAllTodos,
  editTodoItem,
  removeTodoItem,
  addTask,
} from "../../../store/todoActions";
import styles from "./TodoList.module.css";
import "./todoListAnimation.css";

import { ITodoItem } from "../../../models";
import Progress from "../Progress";
import CustomSelect from "../CustomSelect";
import TaskItem from "../TaskItem";
import AddTaskBox from "../AddTaskBox";

export default function TodoList() {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.todo.todoItems);

  const [filter, setFilter] = useState<string>("All");

  const handleDelete = (id: string) => {
    dispatch(removeTodoItem(id));
  };

  const handleEdit = (task: ITodoItem) => {
    dispatch(editTodoItem(task));
  };

  const handleAdd = (title: string) => {
    dispatch(addTask(title));
  };

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
        <div className={styles.spacer} />
        <CustomSelect value={filter} handleChange={setFilter} />
      </div>
      <div className={styles.taskListContainer}>
        <TransitionGroup component="div">
          {allTodos.map(
            (task) =>
              (filter == "All" ||
                (filter == "Done" && task.completed) ||
                (filter == "Undone" && !task.completed)) && (
                <CSSTransition timeout={500} classNames="fade" key={task.id}>
                  <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </CSSTransition>
              )
          )}
        </TransitionGroup>
      </div>
      <div>
        <AddTaskBox onAdd={handleAdd} />
      </div>
    </div>
  );
}
