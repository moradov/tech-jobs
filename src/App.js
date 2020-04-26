import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' exact component={Search} />
      </Switch>
    </Fragment>
  );
};

export default App;
