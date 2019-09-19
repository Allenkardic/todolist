import React, { Component } from "react";
import "../../CSS/addtodo.css";
import uuid from "uuid";
import { Consumer } from "../../context";

class Addtodo extends Component {
  state = {
    date: "",
    morning: "",
    afternoon: "",
    evening: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { date, activities } = this.state;
    const newTodo = {
      id: uuid(),
      date,
      activities
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });

    this.setState({ date: "", activities: "" });
    this.props.history.push("/");
  };

  render() {
    const { date, activities } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container-addtodo">
              <h1>Add to Todo</h1>
              <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                <label htmlFor="date" className="label-form">
                  {" "}
                  Date:{" "}
                </label>{" "}
                <input
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  value={date}
                  className="container-addtodo-inner"
                  required
                />
                <br />
                <label htmlFor="morning" className="label-form">
                  {" "}
                  Activities:
                </label>{" "}
                <input
                  type="text"
                  placeholder="Activities"
                  name="activities"
                  onChange={this.handleChange}
                  value={activities}
                  className="container-addtodo-inner"
                  required
                />
                <br />
                <button type="submit" value="AddTodo" className="btn">
                  Submit Activity
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addtodo;
