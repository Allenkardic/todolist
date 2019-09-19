import React, { Component } from "react";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_LISTTODO":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };

    case "ADD_TODO":
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    items: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
