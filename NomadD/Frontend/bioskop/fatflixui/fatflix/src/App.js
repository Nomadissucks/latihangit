import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import ManageAdmin from "./pages/manageadmin";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route exact path={"/manageadmin"}>
          <ManageAdmin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
