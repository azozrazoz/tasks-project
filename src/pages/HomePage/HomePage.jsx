import React from "react";

import Header from "../../components/Header";
import TaskCreator from "../../components/TaskCreator";
import Workspace from "../../components/Workspace";

import s from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={s.homePage}>
            <Header />
            <TaskCreator />
            <Workspace />
        </div>
    )
}

export default HomePage;