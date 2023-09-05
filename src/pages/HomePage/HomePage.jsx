import React, { useEffect } from "react";

import Header from "../../components/Header";

import TaskCreator from "../../components/TaskCreator";
import Workspace from "../../components/Workspace";

import s from './HomePage.module.scss'

function HomePage({ countIsDone, countInProcess, refreshTaskData, tasks, setTasks }) {
    useEffect(() => { 
        refreshTaskData();
    }, [tasks])

    return (
        <div className={s.homePage}>
            <Header countIsDone={countIsDone} countInProcess={countInProcess} />
            <TaskCreator refreshTaskData={refreshTaskData} setTasks={setTasks} tasks={tasks} />
            <Workspace refreshTaskData={refreshTaskData} setTasks={setTasks} tasks={tasks} />
        </div>
    )
}

export default HomePage;