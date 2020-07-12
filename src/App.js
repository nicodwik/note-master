import React from 'react';

import './App.css';
import { Typography, Container, CssBaseline,} from '@material-ui/core';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import ToDoList from './ToDoList';
import DraggableDialog from './DragabbleDialog';


var styles = {
  right: '0',
  left: '0',
  backgroundColor: "#ffffff",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  justifyContent: 'center',
  bottom: "0",
}

const App = () => {
  const [todos, setTodos] = useState([])
  return(
    <>
      <CssBaseline>
      <Container maxWidth='sm'>
        <div className='App'>
          <Typography variant='h2'>
            Note Master
          </Typography>
          <Typography variant='body1'>v1.1</Typography>
          <DraggableDialog/>
            <br/>
          <Typography variant='subtitle1'>Made using Material UI & ReactJS</Typography>
            
          <Typography variant='subtitle2'>by Nico</Typography>
          
          
          <ToDoList todos={todos} checkTodo={(todoIndex) => {
              const newTodos = todos.filter((_,index) => index !== todoIndex);
              setTodos(newTodos)
            }}  
            deleteTodo={(todoIndex) => {
              const newTodos = todos.filter((_,index) => index !== todoIndex);
              setTodos(newTodos)
            }}/>
            <div style={styles}>
              <ToDoForm 
                saveTodo={(todoText) => {
                  const trimmedText = todoText.trim();
                  if (trimmedText.length > 0) {
                    setTodos([...todos, trimmedText])
                  }
                }} />
            </div>
        </div>
      </Container>
    </CssBaseline>
    </>
  )
}

export default App;
