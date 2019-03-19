import React from "react";
//import shortid from "shortid";
export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    //  console.log(value);
  }

  onSubmit(event) {
    //  alert("The message added is : " + this.state.value);
    event.preventDefault();
    this.props.addTodo(this.state.value);
    // complete: false

    this.setState({
      value: " "
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} style={{ display: "flex" }}>
        <input
          type="text"
          name="value"
          placeholder="Enter Item"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
