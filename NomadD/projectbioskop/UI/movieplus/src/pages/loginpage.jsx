import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import Axios from "axios";
// import { APIURL } from "../support/apiurl";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
// import { Link } from "@material-ui/core";
import { LoginSuccessAction, Loginthunk, login_error } from "../redux/actions";

class Login extends Component {
  state = {
    error: "",
    loading: false
  };

  onLoginclick = () => {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    this.props.Loginthunk(username, password);

    // Axios.get(`${APIURL}user?username=${username}&password=${password}`)
    //   .then(res => {
    //     if (res.data.length) {
    //       localStorage.setItem("free", res.data[0].id);
    //       this.props.LoginSuccessAction(res.data[0]);
    //     } else {
    //       this.setState({ error: "Wrong Username or Password" });
    //     }
    //     this.setState({ loading: false });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({ loading: false });
    //   });
  };

  render() {
    if (this.props.AuthLog) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div className="mt-3 d-flex justify-content-center">
          <div
            style={{ width: "500px", border: "1px solid transparent" }}
            className="rounded p-2"
          >
            <h1>Login</h1>
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="text"
                className="username"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="username"
                placeholder="Username"
              />
            </div>
            {/* <div style={{ width: "500px", border: "1px solid black" }}> */}
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
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
            <div className="mt-4">
              {this.props.Auth.loading ? (
                <Loader
                  type="Triangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              ) : (
                <button className="btn btn-primary" onClick={this.onLoginclick}>
                  Login
                </button>
              )}
            </div>
            <div className="mt-2">
              Haven't made one yet? <Link to={"/register"}>Register</Link> Now!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    AuthLog: state.Auth.login,
    Auth: state.Auth
  };
};
export default connect(MapStateToProps, {
  LoginSuccessAction,
  Loginthunk,
  login_error
})(Login);
