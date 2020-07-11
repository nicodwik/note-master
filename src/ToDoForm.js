import React from 'react'
import TextField from "@material-ui/core/TextField";
import { useState } from 'react';

const ToDoForm = ({saveTodo}) => {
    const [value, setValue] = useState('')
    return(
        <form 
        onSubmit={(e) => {
            e.preventDefault(); 
            saveTodo(value);
            setValue('');
            }} >
                <TextField variant='outlined' placeholder='Add Todo' margin='normal' value={value} 
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
        </form>
    )
}

export default ToDoForm;