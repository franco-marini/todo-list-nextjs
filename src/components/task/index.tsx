'use client'

import styles from "./task.module.css";
import { ITaskProps } from "./types";

export default function Task({ name, isDone }: ITaskProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" defaultChecked={isDone} id={name} />
      <label htmlFor={name} className={isDone ? styles.doneStyled : ''}>{name}</label>
    </div>
  );
}

