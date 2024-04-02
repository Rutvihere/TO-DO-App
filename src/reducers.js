// reducers.js
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Initialize tasks from local storage or empty array
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add new task to tasks array and update local storage
      const newTask = action.payload;
      const newTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case TOGGLE_TASK:
      // Toggle completion status of a task and update local storage
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    case DELETE_TASK:
      // Delete a task from tasks array and update local storage
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    default:
      return state;
  }
};

export default reducer;
