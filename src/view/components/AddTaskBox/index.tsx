import { useState } from "react";
import styles from "../TaskItem/TaskItem.module.css";

export default function TaskItem({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [typedTitle, setTypedTitle] = useState<string>("");

  const handleSave = () => {
    onAdd(typedTitle);
    setTypedTitle("");
  };

  return (
    <>
      <div className={styles.taskItemEditContainer}>
        <input
          value={typedTitle}
          onChange={(e) => setTypedTitle(e.target.value)}
          placeholder="Add your todo..."
          className={styles.taskItemInput}
        />
        {typedTitle != "" && (
          <button onClick={handleSave} className={styles.saveButton}>
            Add Task
          </button>
        )}
      </div>
    </>
  );
}
