import React from "react";

import s from "./Task.module.scss";

function Task({ id, title, text, date, isDone, tasks, setTasks, refreshTaskData }) {
  const checkIsDone = (e) => {
    e.preventDefault();
    tasks[id].isDone = !tasks[id].isDone
    setTasks(tasks);
    refreshTaskData();
    // console.log(task);
  };

  return (
    <>
      {!isDone ? (
        <div id={id} className={s.task}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.text}>{text}</p>
          <h5 className={s.date}>{date}</h5>
          <button onClick={checkIsDone} className={s.button}>
            ВЫПОЛНИТЬ
          </button>
        </div>
      ) : (
        <div id={id} className={s.taskIsDone}>
          <h3 className={s.titleIsDone}>{title}</h3>
          <p className={s.textIsDone}>{text}</p>
          <h5 className={s.dateIsDone}>{date}</h5>
          <button onClick={checkIsDone} className={s.buttonIsDone}>
            ВЫПОЛНЕНО
          </button>
        </div>
      )}
    </>
  );
}

export default Task;
