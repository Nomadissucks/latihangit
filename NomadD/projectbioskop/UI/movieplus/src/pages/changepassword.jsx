import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { APIURL } from "../support/apiurl";
import { connect } from "react-redux";
import { changePassword } from "./../redux/actions";
import Swal from "sweetalert2";

class Changepass extends Component {
  state = {
    homepage: false
  };

  componentDidMount() {
    console.log(this.props.username);
  }

  changePasswordButton = () => {
    var currentPassword = this.refs.currentpassword.value;
    var newPassword = this.refs.newpassword.value;
    var confirmPassword = this.refs.confirmpassword.value;
    var updatedPassword = {
      confirmPassword
    };
    console.log(newPassword);
    if (
      currentPassword === "" ||
      newPassword === "" ||
      confirmPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "o shit",
        text: "Password must be filled"
      });
    } else if (currentPassword === newPassword) {
      Swal.fire({
        icon: "error",
        title: "are you nuts?",
        text: "you just entered your current password"
      });
    } else {
      Axios.patch(`${APIURL}user/${this.props.userid}`, updatedPassword)
        .then(res => {
          // console.log(res.data);
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Yes"
          }).then(result => {
            if (result.value) {
              this.props.ResetpassAction(res.data);
              this.setState({ toHome: true });
              Swal.fire({
                icon: "success",
                title: "Your password has been Updated!",
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.state.homepage || this.props.userlog === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="mt-3 d-flex justify-content-center">
          <div
            style={{ width: "500px", border: "1px solid transparent" }}
            className="rounded p-2"
          >
            <h1>Change Password</h1>
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
                className="password"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="currentpassword"
                placeholder="Enter Your Current Password"
              />
            </div>
            {/* <div style={{ width: "500px", border: "1px solid black" }}> */}
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
                className="password"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="newpassword"
                placeholder="Enter Your New Password"
              />
            </div>
            <div className="p-1" style={{ borderBottom: "1px solid black" }}>
              <input
                type="password"
                className="password"
                style={{
                  border: "transparent",
                  width: "100%",
                  fontSize: "20px"
                }}
                ref="confirmpassword"
                placeholder="Confirm Your New Password"
              />
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={this.changePasswordButton}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    username: state.Auth.username,
    userlog: state.Auth.login,
    userId: state.Auth.id,
    password: state.Auth.password,
    role: state.Auth.role
  };
};

export default connect(MapStateToProps, { changePassword })(Changepass);
