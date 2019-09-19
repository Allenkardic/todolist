import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../CSS/listtodo.css";
import { Consumer } from "../../context";

class Listtodo extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_LISTTODO", payload: id });
  };

  render() {
    const { id, date, activities } = this.props.content;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="container">
              <h1>
                Date: {date}{" "}
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  class="fas fa-trash-alt delete-todos"
                />
              </h1>

              <ul>
                <li className="container-inner-list">
                  Activities: {activities}
                </li>
              </ul>
              <form action="">
                <label htmlFor="">Activities completed:</label>
                <input
                  style={{ float: "right", padding: "5%" }}
                  type="checkbox"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Listtodo;

Listtodo.propTypes = {
  content: PropTypes.object.isRequired
};
