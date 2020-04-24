import React from "react";
import "./App.css";
import CounterContainer from "./containers.js/CounterContainer";
import TodosContainer from "./containers.js/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer /> <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
