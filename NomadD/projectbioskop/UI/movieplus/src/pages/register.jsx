import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../support/apiurl";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    userList: [],
    userExists: false,
    registerSuccess: false,
    warning: ""
  };

  registerButton = () => {
    var newUsername = this.refs.username.nodeValue;
    var newPassword = this.refs.password.nodeValue;
    var data = {
      username: newUsername,
      password: newPassword,
      role: "user"
    };

    Axios.get(`${APIURL}users?username=${newUsername}`)
      .then(res => {
        if (res.data.length) {
          this.setState({
            warning: "Username have been taken",
            userExists: true,
            registerSuccess: false
          });
        } else
          Axios.post(`${APIURL}users`, data)
            .then(res => {
              this.setState({
                warning: "Your Account has been Registered",
                registerSuccess: true,
                userExists: true
              });
            })
            .catch(err => {
              console.log(err);
            });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="mt-3 d-flex justify-content-center">
        <div
          style={{ width: "500px", border: "1px solid transparent" }}
          className="rounded p-2"
        >
          <h1>Register</h1>
          <div className="p-1" style={{ borderBottom: "1px solid black" }}>
            <input
              type="text"
              className="username"
              style={{ border: "transparent", width: "100%", fontSize: "20px" }}
              ref="username"
              placeholder="username"
            />
          </div>
          <div className="p-1" style={{ borderBottom: "1px solid black" }}>
            <input
              type="text"
              className="username"
              style={{
                border: "transparent",
                width: "100%",
                fontSize: "20px"
              }}
              ref="password"
              placeholder="Password"
            />
          </div>
          {this.state.userExists ? (
            <div className="alert alert-danger mt-2">
              {this.state.warning}{" "}
              <span
                onClick={() =>
                  this.setState({ warning: "", userExists: false })
                }
                className="float-right font-weight-bold"
              >
                <div>x</div>
              </span>
            </div>
          ) : null}
          <div className="mt-4">
            <button className="btn btn-primary" onClick={this.registerButton}>
              Register
            </button>
            {this.state.registerSuccess ? (
              <p className="mt-3">
                Have Account? <Link to={"/loginpage"}>Log In</Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
