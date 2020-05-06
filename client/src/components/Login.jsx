import React, { Component } from "react";
import { login } from "./UserFunctions";

class Login extends Component {

  //Creating of the constructor
  constructor() {
    super();
  //Creating of the State objects
    this.state = {
      email: "",
      passwordError: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  //functionality to read user data from login form
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // functionality to click on submit button of login form
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    // routing into user profile page when valid user  
    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    });
  }

  render() {
    return (
      //Login from UI Design using HTML and BOOTSTRAP
      <div className="container">
        <div className="row  text-center m-auto">
          <div className="col-md-6 m-5 mx-auto p-3 border border-primary rounded ">
            <form noValidate onSubmit={this.onSubmit}> 
              <h1 className="h3 mb-3 font-weight-medium">Sign IN </h1>
              <hr></hr>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  required="required"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
