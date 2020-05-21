import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import How from "./pages/How";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/faq" component={FAQ} />
        <Route path="/how" component={How} />
      </Switch>
    </div>
  );
}

export default App;
