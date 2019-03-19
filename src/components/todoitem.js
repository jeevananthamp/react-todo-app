import React from "react";
import { genericTypeAnnotation } from "babel-types";

export default class Todoitem extends React.Component {
  constructor(props) {
    super(props);
    //this.markComplete = this.markComplete.bind(this);
  }
  getStyle() {
    return {
      padding: "15px",
      backgroundColor: "#ccc",
      textDecoration: this.props.todo.complete ? "line-through" : "none"
    };
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkBox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />{" "}
          {this.props.todo.value}
          <button
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}
            style={btnstyle}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}
const btnstyle = {
  backgroundColor: "red",
  float: "right",
  color: "white",
  padding: "5x 10px",
  cursor: "pointer"
};
