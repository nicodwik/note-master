import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from 'react'
import MuiAlert from "@material-ui/lab/Alert";

const { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, makeStyles, Snackbar } = require("@material-ui/core")

const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
    },
}));

const ToDoList = ({todos, deleteTodo}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }


    // const [checked, setChecked] = useState(false);

    return(
        <div className={classes.root}>
            <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()}  divider button>
                    {/* <Checkbox key={index.toString()} checked={checked} color='primary' onChange={(e) => {
        const completed = document.getElementById('completed');
        setChecked(e.target.checked);
        checked === true ? completed.style.textDecoration='none' : completed.style.textDecoration='line-through'
    }} inputProps={{'aria-label': 'primary checkbox'}} /> */}
                    <ListItemText primary={todo} id='completed' />

                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => {deleteTodo(index); handleOpen();}}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem> 
            ))}
            <Snackbar 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            > 
                <Alert severity='error'>
                    task Deleted!
                </Alert>        
            </Snackbar>
        </List>
        </div>
    )
}

export default ToDoList;