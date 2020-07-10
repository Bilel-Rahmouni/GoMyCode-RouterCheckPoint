import React from "react";
import { Redirect } from "react-router-dom";

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(auth) {
    this.isAuthenticated = true;
    setTimeout(auth, 100);
  },
};

class AdminArea extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false,
    };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/admin" },
    };

    const { redirectToReferrer } = this.state;

    return redirectToReferrer ? (
      <Redirect to={from} />
    ) : (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button className="btn btn-info" onClick={() => this.login()}>
          Log in
        </button>
      </div>
    );
  }
}
export default AdminArea;
