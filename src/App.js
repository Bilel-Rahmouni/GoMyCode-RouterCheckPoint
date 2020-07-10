import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Products from "./components/Products";
import AdminArea from "./components/AdminArea";
import Admin from "./components/Admin";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="navbar">
            <ul className="nav container navbar-nav">
              <li>
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="/category">
                  Category
                </Link>
              </li>
              <li>
                <Link className="links" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="links" to="/login">
                  Admin area
                </Link>
              </li>
            </ul>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/Admin" exact component={Admin} />
          <Route path="/category" exact component={Category} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" exact component={AdminArea} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
