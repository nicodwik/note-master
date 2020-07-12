import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Button, Snackbar, TextField, makeStyles } from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";


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

const ToDoForm = ({saveTodo}) => {
    const [value, setValue] = useState('')
    const submitHandler = (e) => {
            e.preventDefault(); 
            saveTodo(value);
            setValue('');
            handleOpen();
    }

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        value === '' ? setOpen(false) : setOpen(true)
    }
    const handleClose = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }
    
    return(
        <div className={classes.root}>
        <form style={{display: 'inline-flex'}}>
            <TextField  variant='outlined' placeholder='Cleaning House' value={value} 
            onChange={(e) => {
                setValue(e.target.value)
            }}  /> 
            <Button style={{marginLeft: '10px'}} variant='contained' size='large' color='primary' onClick={submitHandler} >
                <AddIcon/>
            </Button>
        </form>
        <Snackbar 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            > 
                <Alert severity='success'>
                    task Created!
                </Alert>        
        </Snackbar>
                    
        
        </div>
    )
}

export default ToDoForm;