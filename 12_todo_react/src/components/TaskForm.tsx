//components
import * as React from "react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// styles
import styles from "./TaskForm.module.css";

//interfaces
import { Task } from "../interfaces/Task";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
    console.log(title);
    console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={handlerChange} />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handlerChange} />
      </div>

      <div className={styles.input_container}>
        <input type="submit" value={btnText} />
      </div>
    </form>
  );
};

export default TaskForm;
