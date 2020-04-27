import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RedPage from "./Pages/RedPage";
import BluePage from "./Pages/BluePage";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Route path="/red" component={RedPage} />
        <Route path="/blue" component={BluePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
