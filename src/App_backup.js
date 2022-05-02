import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from './AddTodo';
import { useState, useEffect} from "react";

function App() {
  let items = [
    { id: 0, title : "Hello world1", done : true },
    { id: 1, title : "Hello world2", done : false },
    { id: 2, title : "Hello world3", done : true },
    { id: 3, title : "Hello world4", done : true },
    { id: 4, title : "Hello world5", done : true },
  ]
  const [myItems, setMyItems] = useState(items);

  const add = (item) => {
    item.id = "ID-" + myItems.length;
    item.done = false;
    let arrItems = [...myItems, item];
    setMyItems(arrItems);
  }

  const deleteHandler = (item) => {
    const newItems = myItems.filter(e => e.id !== item.id);
    setMyItems(newItems);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <div className="TodoList">
        {
          myItems.length > 0 && 
          (
            <Paper style={{ margin : 16}}>
              <List>
                {
                  myItems.map((value, idx) => (
                    <Todo item={value} key={idx} deleteHandler={deleteHandler} />
                  ))
                }
              </List>
            </Paper>
          )
        }
        </div>
      </Container>
    </div>
  );
}

export default App;

