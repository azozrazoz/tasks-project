import React from "react";
import { useSnackbar } from "notistack";

import s from "./TaskCreator.module.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  addTask,
  updateTask,
  setHeader,
  setNote,
  setEditId,
  setIsEdit,
} from "../../store/tasksSlice";

function TaskCreator() {
  const { enqueueSnackbar } = useSnackbar();
  const { tasks, header, note, edit_id, is_edit } = useSelector(
    (state) => state.tasks
  );

  const dispatch = useDispatch();

  const submitEdit = (e) => {
    try {
      e.preventDefault();

      // throw new Error("Couldn't create enw task :(") // test error

      // new Date().toISOString().slice(0, 10)

      const newTask = {
        id: edit_id,
        title: header,
        text: note,
        date: new Date().toLocaleDateString(),
        isDone: false,
      };

      dispatch(updateTask(newTask));
      dispatch(setEditId(null));
      dispatch(setIsEdit(false));
      
      dispatch(setHeader(""));
      dispatch(setNote(""));

      enqueueSnackbar({
        message: "Tack has been updated!",
        variant: "info",
      });
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar({
        message: error.message,
        variant: "error",
      });
    }
  };

  const submitSave = (e) => {
    try {
      e.preventDefault();

      // throw new Error("Couldn't create enw task :(") // test error

      // new Date().toISOString().slice(0, 10)

      const newTask = {
        id: tasks.length,
        title: header,
        text: note,
        date: new Date().toLocaleDateString(),
        isDone: false,
      };

      dispatch(addTask(newTask));

      dispatch(setHeader(""));
      dispatch(setNote(""));

      enqueueSnackbar({
        message: "Tack has been created!",
        variant: "success",
      });
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar({
        message: error.message,
        variant: "error",
      });
    }
  };

  return (
    <form className={s.taskCreator}>
      <input
        className={s.header}
        value={header}
        onChange={(e) => {
          dispatch(setHeader(e.target.value));
        }}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className={s.note}
        value={note}
        onChange={(e) => {
          dispatch(setNote(e.target.value));
        }}
        type="text"
        placeholder="Ваша заметка"
      />
      {is_edit ? (
        <button onClick={submitEdit} type="submit" className={s.buttonEdit}>
          ОБНОВИТЬ
        </button>
      ) : (
        <button onClick={submitSave} type="submit" className={s.buttonSave}>
          СОХРАНИТЬ
        </button>
      )}
    </form>
  );
}

export default TaskCreator;
