import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './TaskList.css';
const TaskList = () => {
  // Retrieve tasks from Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch(); //Initialize useDispatch hook to dispatch actions
   
  // Function to handle toggling task completion
  const handleToggle = (id) => {
    dispatch(toggleTask(id)); // Dispatch toggleTask action with task ID
  };
  // Function to handle deleting a task
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatch deleteTask action with task ID
  };

  return (
    <ul className="list-group" style={{ listStyleType: 'none'}}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : ''}`}
          onClick={() => handleToggle(task.id)}
          style={{ cursor: 'pointer' }}
        >
          {/* Display tick mark icon if task is completed */}
          {task.completed && (
            <span className="mr-2">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          )}
          {/* Applying different font color and decoration for completed tasks */}
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
          <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); handleDelete(task.id); }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default TaskList;
