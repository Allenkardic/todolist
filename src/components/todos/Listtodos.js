import React, { Component } from "react";
import Listtodo from "./Listtodo";
import { Consumer } from "../../context";

class Listtodos extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { items } = value;
          return (
            <React.Fragment>
              {items.map((content) => (
                <Listtodo key={content.id} content={content} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Listtodos;
