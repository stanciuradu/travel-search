import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
