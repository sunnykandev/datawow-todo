import { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

import { ITodoItem } from "../../../models";
import TaskItemMenuBtn from "./TaskItemMenuButton";
import styles from "./TaskItem.module.css";

export default function TaskItem({
  task,
  onDelete,
  onEdit,
}: {
  task: ITodoItem;
  onDelete: (id: string) => void;
  onEdit: (task: ITodoItem) => void;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [typedTitle, setTypedTitle] = useState<string>(task.title);

  const handleEdit = () => {
    onEdit({ ...task, title: typedTitle });
    setIsEditing(false);
  };

  const handleCheck = () => {
    onEdit({ ...task, completed: true });
  };

  const handleUncheck = () => {
    onEdit({ ...task, completed: false });
  };

  return (
    <>
      {isEditing ? (
        <div className={styles.taskItemEditContainer}>
          <input
            value={typedTitle}
            onChange={(e) => setTypedTitle(e.target.value)}
            className={styles.taskItemInput}
          />
          <button onClick={handleEdit} className={styles.saveButton}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.taskItemContainer}>
          {task.completed ? (
            <MdCheckBox
              onClick={handleUncheck}
              className={styles.taskItemCheckbox}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={handleCheck}
              className={styles.taskItemCheckbox}
            />
          )}
          <div className={styles.taskItemContent}>{task.title}</div>
          <TaskItemMenuBtn
            onEdit={() => setIsEditing(true)}
            onDelete={() => onDelete(task.id)}
          />
        </div>
      )}
    </>
  );
}
