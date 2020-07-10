import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Nike from "./Nike";
import Polo from "./Polo";
import Adidas from "./Adidas";
import LeeCooper from "./LeeCooper";

import "./products.css";
function About() {
  return (
    <Router>
      <div className="prod">
        <Switch>
          <div className="products">
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/products/1">NIKE Liteforce Blue Sneakers</Link>
              </li>
              <li>
                <Link to="/products/2">U.S. POLO ASSN. Slippers</Link>
              </li>
              <li>
                <Link to="/products/3">ADIDAS Adispree Running Shoes</Link>
              </li>
              <li>
                <Link to="/products/4">Lee Cooper Mid Sneakers</Link>
              </li>
            </ul>
          </div>
        </Switch>
        <div className="productsContainer">
          <div className="productsDetail">
            <Route path="/products/1" component={Nike} />
            <Route path="/products/2" exact component={Polo} />
            <Route path="/products/3" exact component={Adidas} />
            <Route path="/products/4" exact component={LeeCooper} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default About;
