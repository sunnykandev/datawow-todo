import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { fetchAllTodos } from '../../../store/todoActions';
import styles from './TodoList.module.css';

export default function TodoList() {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => {
    console.log(state);
  });

  const [filter, setFilter] = React.useState<"All"|"Done"|"Undone">("All");

  React.useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      To do list
    </div>
  );
}
