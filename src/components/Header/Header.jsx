import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import s from './Header.module.scss'
import { Link } from "react-router-dom";

function Header() {
    const [isCompleted, setIsCompleted] = useState(0);
    const { tasks } = useSelector((state) => state.tasks);

    useEffect(() => {        
        setIsCompleted(tasks.filter((item) => item.isDone).length);
    }, [tasks]);

    return (
        <div className={s.container}>
            <Link className={s.h2} to="/">Keeper</Link>
            <Link className={s.h2} to="/dashboard">Dashboard</Link>
            <h2 className={s.h2}>Выполнено: {isCompleted}, В процессе: {tasks.length - isCompleted}</h2>
        </div>
    )
}

export default Header;