// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const TaskInput = () => {
  const [taskText, setTaskText] = useState(''); // Initialize state for task text
  const dispatch = useDispatch();// Initialize useDispatch hook to dispatch actions
  // Function to handle input change
  const handleChange = (e) => {
    setTaskText(e.target.value);// Update task text state with input value
  };
  
   // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent default form submission behavior
    if (taskText.trim() === '') return;// Check if task text is empty
    dispatch(addTask(taskText));// Dispatch addTask action with task text
    setTaskText('');// Reset task text state to empty string
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={taskText}
          onChange={handleChange}// Call handleChange function on input change
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
