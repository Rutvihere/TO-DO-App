// actions.js
export const ADD_TASK = 'ADD_TASK'; //adding task
export const TOGGLE_TASK = 'TOGGLE_TASK'; //toggling task
export const DELETE_TASK = 'DELETE_TASK'; // deleting a task

//function to add a task
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(), // Generate unique ID for the task
    text,
    completed: false, // Default to not completed
  },
});

//action creator function to toggle task completion
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

//action creator function to delete a task
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
