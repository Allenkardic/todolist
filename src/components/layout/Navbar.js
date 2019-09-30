import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../CSS/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { brand } = this.props;
    return (
      <div className="navbar">
        <div className="navbar-items">
          {brand}
        </div>
        <div className="navbar-items">
          <Link to="/addtodo">
            <i
              class="fas fa-plus"
              style={{ color: "rgb(32, 35, 42)", fontSize: "1.5em" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  brand: PropTypes.string.isRequired
};
