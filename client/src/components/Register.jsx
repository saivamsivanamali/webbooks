import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  //creating of the constructor  
  constructor() {
    super();
  //creating of the state objects
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      address: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //functionality to read user data from registration form
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // functionality to click on submit button of Registration form
  onSubmit(e) {
    e.preventDefault();
   
    // saves the register from details in the mongodb database
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
      address: this.state.address,
    };
  // registration form  validation
    if (this.state.email === "") {
      alert("Email is required");
    } else if (this.state.mobile === "") {
      alert("Mobile Number  is required");
    } else if (this.state.password === "") {
      alert("Password is required");
    } else {
  // If all required fields have data then registration from datails saves otrher wise send alert to user
      register(newUser).then((res) => {
        this.props.history.push(`/login`);
      });
    }
  }

  render() {
    return (
      //Registration from UI Design using HTML and BOOTSTRAP
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto p-3 border border-success rounded ">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-medium text-center">
                Register
              </h1>
              <hr></hr>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
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
                <label htmlFor="mobile">
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="Number"
                  className="form-control"
                  name="mobile"
                  placeholder="mobile Number"
                  value={this.state.mobile}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="address"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
