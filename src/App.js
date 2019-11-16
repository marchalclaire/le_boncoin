import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};
export default App;
