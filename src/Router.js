import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { tasksData } from "./constants/tasks";

function Router() {
  const [tasks, setTasks] = useState([]);
  const [countIsDone, setCountIsDone] = useState(2);
  const [countInProcess, setCountInProcess] = useState(0);

  const refreshTaskData = () => {
    setCountIsDone(0);
    setCountInProcess(0);

    tasks.forEach((item) => {
      if (item.isDone) {
        setCountIsDone((prev) => (prev += 1));
      } else {
        setCountInProcess((prev) => (prev += 1));
      }
    });
  };

  useEffect(() => {
    console.log(tasksData);
    setTasks(tasksData);
    refreshTaskData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countIsDone={countIsDone}
              setCountIsDone={setCountIsDone}
              countInProcess={countInProcess}
              setCountInProcess={setCountInProcess}
              refreshTaskData={refreshTaskData}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              countIsDone={countIsDone}
              countInProcess={countInProcess}
              refreshTaskData={refreshTaskData}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
