import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import FilterOption from "./Pages/FilterOption";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FilterOption}/>
      </Switch>
    </Router>
  );
}

export default App;
