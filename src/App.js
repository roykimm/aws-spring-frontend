import React, { Component } from 'react'
import Todo from './Todo'
import "./App.css"
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from './AddTodo';
import { call } from "./service/ApiService";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
        }
    }

    componentDidMount() {
        call("/todo", "GET", null).then((response) => 
            this.setState({ items : response.data })
        )
    }

    add = (item) => {
        call("/todo", "POST", item).then((response) => 
            this.setState({ items : response.data })
        )
    }

    delete = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            this.setState({ items : response.data })
        )
    }

    update = (item) => {
        call("/todo", "PUT", item).then((response) =>
            this.setState({ items : response.data })
        )
    }

  render() {
      var todoItems = this.state.items.length > 0 && (
          <Paper style={{ margin : 16 }} >
              <List>
                  {this.state.items.map((item, idx) => (
                      <Todo 
                        item={item} 
                        key={item.id} 
                        delete={this.delete} 
                        update={this.update}
                      />
                  ))}
              </List> 
          </Paper>
      )

      return (
        <div className="App">
            <Container maxWidth="md">
                <AddTodo add={this.add} />
                <div className="TodoList">
                    {todoItems}
                </div>
            </Container>
        </div>
      )
  }
}

export default App
