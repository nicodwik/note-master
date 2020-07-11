import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

const { List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } = require("@material-ui/core")


const ToDoList = ({todos, deleteTodo}) => {
    return(
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => {deleteTodo(index)}}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem> 
            ))}
        </List>
    )
}

export default ToDoList;