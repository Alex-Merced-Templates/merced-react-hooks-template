//////////////////////////////
// This uses the TaskRunner Pattern for Application Wide State Management
//////////////////////////////

// Define and initialState and task list
import { createTaskRunner } from "merced-react-hooks";

//The Initial State
const initialState = {
  count: 0,
};

//The Task List, list of functions to run
const taskList = {
  add: (state, setState, payload) => {
    setState({ ...state, count: state.count + payload });
  },
  sub: (state, setState, payload) => {
    setState({ ...state, count: state.count - payload });
  },
};

//Generate the TaskStore and useTaskStore hook
export const [TaskStore, useTaskStore] = createTaskRunner(
  initialState,
  taskList
);
