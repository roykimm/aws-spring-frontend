import React, { useState, useEffect } from 'react';
import { TextField, Paper, Button, Grid } from "@material-ui/core";

function AddTodo({add}) {

    const [item, setItem] = useState({});

    const onButtonClick = () => {
        add(item);
        setItem({title : ""});
    }

    const onClickHandler = (e) => {
        if(e.key === 'Enter'){
            onButtonClick();
        }
    }

    useEffect(() => {
    },[item]) 

  return (
    <Paper style={{ margin : 16, padding : 16}}>
        <Grid container>
            <Grid xs={11} md={11} item style={{ paddingRight : 16}}>
                <TextField 
                    placeholder='할일을 입력해주세요.' fullWidth 
                    onChange={(e) => setItem({title : e.target.value})}
                    value={item.title}
                    onKeyPress={onClickHandler}
                />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth color="secondary" variant="outlined"
                    onClick={onButtonClick}
                >+</Button>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default AddTodo