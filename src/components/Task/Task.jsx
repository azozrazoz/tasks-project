import React from "react";
import { useSnackbar } from "notistack";

import s from "./Task.module.scss";

import { useDispatch } from "react-redux";
import { setHeader, setNote, setEditId, setIsEdit } from "../../store/tasksSlice";
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

  const onEdit = (e) => {
    e.preventDefault();

    dispatch(setHeader(title));
    dispatch(setNote(text));
    dispatch(setEditId(id));
    dispatch(setIsEdit(true));
  }

  return (
    <div id={id} className={`${s.task} ${isDone ? s.isDone : ""}`}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <h5 className={s.date}>{date}</h5>
      <button onClick={checkIsDone} className={s.buttonExecute}>
        {isDone ? "ВЫПОЛНЕНО" : "ВЫПОЛНИТЬ"}
      </button>
      <br />
      <button onClick={onEdit} className={s.buttonEdit}>
        ИЗМЕНИТЬ
      </button>
    </div>
  );
}

export default Task;
