import React, { useState } from "react";

import s from "./TaskCreator.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { addTask } from '../../store/tasksSlice'

function TaskCreator() {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch()
  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // new Date().toISOString().slice(0, 10)

    const newTask = {
      id: tasks.length,
      title: header,
      text: note,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };
    
    dispatch(addTask(newTask));
  };

  return (
    <form className={s.taskCreator}>
      <input
        className={s.header}
        value={header}
        onChange={(e) => {
          setHeader(e.target.value);
        }}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className={s.note}
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
        type="text"
        placeholder="Ваша заметка"
      />
      <button onClick={submit} type="submit" className={s.button}>
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default TaskCreator;
