import React from "react";
import { BsThreeDots } from "react-icons/bs";

import styles from "./TaskItem.module.css";

const TaskItemMenuButton = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleMenuClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <div className={styles.menuButtonContainer}>
      <button
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className={styles.taskItemMenuBtn}
      >
        <BsThreeDots />
        {open && (
          <div onClick={handleMenuClick} className={styles.menuButtonMenu}>
            <ul className={styles.menuButtonMenuUl}>
              <li onClick={onEdit}>Edit</li>
              <li onClick={onDelete} className={styles.menuButtonMenuDelete}>
                Delete
              </li>
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default TaskItemMenuButton;
