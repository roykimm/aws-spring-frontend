import React, {useState, useEffect} from 'react'
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { DeleteOutlined } from '@material-ui/icons';

function Todo({item, deleteHandler}) {

    const [ items, setItems ] = useState({id : "", title : ""});
    const [ readOnly , setReadOnly ] = useState(true);

    useEffect(() => {
        console.log(item);
        setItems(item);
    },[])

    const deleteEventHandler = (e) => {
        deleteHandler(items);
    }

    const offReadOnlyMode = () => {
        setReadOnly(false);
    }

    const editEventHandler = (e) => {

        console.log("test")
        let item = items;
        console.log(item)
        item.title = e.target.value;
        setItems(item);
    }

    const enterKeyEventHandler = () => {
        console.log('11')
    }

    useEffect(() => {
        console.log(readOnly);
    },[readOnly])
    

  return (
      <div className="text-center">
          <ListItem className="Todo"> 
            <Checkbox checked={items.done} />
            <ListItemText>
                <InputBase 
                    inputProps={{ 
                        "arial-label" : "naked",
                        readOnly : readOnly,
                    }}
                    type="text"
                    id={items.id} 
                    name={items.id}
                    value={items.title} 
                    multiline={true}
                    fullWidth={true}
                    onClick={offReadOnlyMode}
                    onChange={editEventHandler}
                    onKeyPress={enterKeyEventHandler}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton 
                    aria-label="Delete Todo"
                    onClick={deleteEventHandler}
                >
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      </div>
  )
}

export default Todo