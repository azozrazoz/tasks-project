import React from "react";
import { useSnackbar } from "notistack";

import s from "./Task.module.scss";

import { useDispatch } from "react-redux";
import { completeTask } from "../../store/tasksSlice";

function Task({ id, title, text, date, isDone }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const checkIsDone = (e) => {
    e.preventDefault();
    dispatch(completeTask(id));
    if (isDone) {
      enqueueSnackbar({ message: "Task return!", variant: "info" });
    } else {
      enqueueSnackbar({ message: "Task complete!", variant: "success" });
    }
  };

  return (
    <div id={id} className={`${s.task} ${isDone ? s.isDone : ""}`}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <h5 className={s.date}>{date}</h5>
      <button onClick={checkIsDone} className={s.button}>
        {isDone ? "ВЫПОЛНЕНО" : "ВЫПОЛНИТЬ"}
      </button>
    </div>
  );
}

export default Task;
