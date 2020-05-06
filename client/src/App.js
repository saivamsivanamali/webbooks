import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import PageNotFound from "./components/page-not-found.jsx";
import Profile from "./components/Profile.jsx";
import WishList from "./components/wishlist.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/wishlist" component={WishList} />

            {/* <Route component={PageNotFound} /> */}
            {/* <Route path="/page-not-found" component={PageNotFound} />
            <Redirect path="/page-not-found" /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
