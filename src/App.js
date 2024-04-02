import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5" style={{ backgroundColor: 'lightgreen' }}>
        <h1 className="text-center mb-4">My To-Do App</h1>
        <TaskInput /> {/*component to add new tasks */}
        <TaskList />  {/*component to display tasks */}
      </div>
    </Provider>
  );
}

export default App;
