import React from 'react';

import './App.css';
import { Typography } from '@material-ui/core';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const [todos, setTodos] = useState([])
  return(
    <div className='App'>
      <Typography variant='h2'>
        List Todo
      </Typography>
      <Typography variant='subtitle1'>Made using Material UI & ReactJS</Typography>
      <Typography variant='subtitle3'>by Nico</Typography>
      <ToDoForm 
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText])
          }
        }} />
      <ToDoList todos={todos} 
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_,index) => index !== todoIndex);
          setTodos(newTodos)
        }}/>
    </div>
  )
}

export default App;
