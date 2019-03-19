import React from "react";
import Todos from "./wrapper.js";
import Header from "./layout/header.js";
import AddForm from "./addform.js";
import uuid from "uuid";
import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          value: "hi iam jeeva",
          complete: false
        },
        {
          id: uuid.v4(),
          value: "i am a student",
          complete: false
        },
        {
          id: uuid.v4(),
          value: "and now i am working",
          complete: false
        }
      ]
    };
  }

  markComplete(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  }
  addTodo(value) {
    console.log(value);
    const newTodo = {
      id: uuid.v4(),
      value,
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  delTodo(id) {
    console.log(id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    console.log(this.state.todos);
  }
  render() {
    //console.log(this.props.todos);
    return (
      <div class="container">
        <Header />
        <AddForm addTodo={this.addTodo.bind(this)} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete.bind(this)}
          delTodo={this.delTodo.bind(this)}
        />
      </div>
    );
  }
}
