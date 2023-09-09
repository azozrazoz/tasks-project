import React, { useEffect, useState } from "react";

import s from './Dashboard.module.scss'
import Header from "../../components/Header";
import { useSelector } from "react-redux";

function Dashboard() {
    const [isCompleted, setIsCompleted] = useState(0);
    const { tasks } = useSelector((state) => state.tasks);

    useEffect(() => {        
        setIsCompleted(tasks.filter((item) => item.isDone).length);
    }, [tasks]);
    return (
        <div>
            <Header countIsDone={isCompleted} countInProcess={tasks.length - isCompleted} />
            <div className={s.dashboard}>
                <h1 className={s.h1} style={{color: "#00c41e"}}>{isCompleted}</h1> 
                <h1 className={s.h1} style={{color: "#c40000"}}>{tasks.length - isCompleted}</h1>
            </div>
        </div>
    )
}

export default Dashboard;