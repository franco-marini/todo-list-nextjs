'use client'

import Task from "../task";
import styles from "./task-list.module.css";
import { ITaskListProps } from "./types";

export default function TaskList({ tasks }: ITaskListProps) {
  return (
    <form className={styles.container} onSubmit={(e) => {
      e.preventDefault();
    }}>
      {tasks.map((task) => <Task key={String(task._id)} name={task.name} isDone={task.isDone} />)}
      <input type='submit' value="Save" />
    </form>
  );
}

