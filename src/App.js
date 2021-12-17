import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Logement from "./pages/logement/Logement";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/a-propos">
            <About />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/logement/:id">
            <Logement />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
