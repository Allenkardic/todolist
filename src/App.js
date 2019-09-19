import React from "react";
import Navbar from "./components/layout/Navbar";
import Listtodos from "./components/todos/Listtodos";
import { Provider } from "./context";
import About from "./components/layout/About";
import Addtodo from "./components/todos/Addtodo";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar brand="AdDoN" about="about" />
          <Switch>
            <Route exact path="/" component={Listtodos} />
            <Route exact path="/addtodo" component={Addtodo} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
