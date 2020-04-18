import React from "react";
import Todo from "./Pages/Todo";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/todo" component={Todo} />
          <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
