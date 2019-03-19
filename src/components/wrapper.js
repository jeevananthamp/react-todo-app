import React from "react";
import Todoitem from "./todoitem.js";

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <h1>
        {
          <Todoitem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete.bind(this)}
            delTodo={this.props.delTodo.bind(this)}
          />
        }
      </h1>
    ));
  }
}
