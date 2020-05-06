import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

//By using homepage class name we can set home page as default page for NAVBAR
class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    //here group the NAVBAR items before login to user account
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
//Group the NAVBAR items if user login done
    const userLink = (
      <div>
        <ul className="navbar-nav mr-5 ">
          <li className="nav-item ">
            <Link className="nav-link" to="/wishlist">
              Wish List <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li
            className="nav-item"
            style={{ marginLeft: "100px", marginRight: "10px" }}
          >
            <form className="form-inline mx-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0 m-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </li>

          <li
            className="nav-item"
            style={{ marginLeft: "300px", marginRight: "10px" }}
          >
            <Link to="/profile" className="nav-link">
              User
            </Link>
          </li>

          <li className="nav-item">
            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
              Logout
            </a>
          </li>

          <li className="nav-item mr-3" style={{ color: "red" }}>
            <i className="fas fa-shopping-cart"></i>
          </li>

          <li className="nav-item ml-0">
            0
            <span
              className="badge badge-secondary"
              id={"swa"}
              style={{ color: "blue" }}
            >
              {this.props.total}
            </span>
            <span></span>
          </li>
        </ul>
      </div>
    );

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light
       bg-info p-3"
        >
          
          <NavLink className="navbar-brand" to="">
            Web Books
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/home">
                  Books <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to="/home">
                  Authers <span className="sr-only">(current)</span>
                </Link>
              </li>

              {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
          </div>
          <div></div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Landing);
