import { createSlice } from "@reduxjs/toolkit";
import { tasksData } from "../constants/tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: tasksData,
    header: "",
    note: "",
    edit_id: null,
    is_edit: false,
  },
  reducers: {
    setEditId(state, action) {
      state.edit_id = action.payload;
    },
    setIsEdit(state, action) {
      state.is_edit = action.payload;
    },
    setHeader(state, action) {
      state.header = action.payload;
    },
    setNote(state, action) {
      state.note = action.payload;
    },
    updateTask(state, action) {
      state.tasks[state.edit_id] = action.payload;
    },
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
    },
  },
});

export const { addTask, updateTask, completeTask, setHeader, setNote, setEditId, setIsEdit } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
