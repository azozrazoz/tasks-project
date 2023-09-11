import { createSlice } from "@reduxjs/toolkit";
import { tasksData } from "../constants/tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: tasksData
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    completeTask(state, action) {
      state.tasks = state.tasks.map((elem) => {
        if (elem.id === action.payload) {
          if (elem.isDone) {
            state.processedTasksCount += 1;
            state.completedTasksCount -= 1;            
          } else {
            state.processedTasksCount -= 1;
            state.completedTasksCount += 1;
          }

          return {
            ...elem,
            isDone: !elem.isDone,
          };
        }
        return elem;
      });
      // state.tasks[action.payload].isDone = !state.tasks[action.payload].isDone;
    },
  },
});

export const { addTask, completeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
