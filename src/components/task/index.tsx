'use client'

import { useState } from "react";

import styles from "./task.module.css";
import { ITaskProps } from "./types";

export default function Task({ name, isDone }: ITaskProps) {
  const [isChecked, setIsChecked] = useState(isDone)

  return (
    <div className={styles.container}>
      <input
        id={name}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          e.stopPropagation()
          setIsChecked((prevValue) => !prevValue);
        }} />
      <label htmlFor={name} className={isChecked ? styles.doneStyled : ''}>{name}</label>
    </div>
  );
}

