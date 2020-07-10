import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Router>
        <li>
          <Link to="/category/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/category/boots">Boots</Link>
        </li>
        <li>
          <Link to="/category/footwear">Footwear</Link>
        </li>
        <Route path="/category/shoes" exact render={() => <h3> shoes</h3>} />
        <Route path="/category/boots" exact render={() => <h3> boots</h3>} />
        <Route
          path="/category/footwear"
          exact
          render={() => <h3> footwear</h3>}
        />
      </Router>
    </div>
  );
}

export default Contact;
