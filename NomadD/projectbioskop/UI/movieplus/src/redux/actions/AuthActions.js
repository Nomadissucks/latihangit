import Axios from "axios";
import { APIURL } from "../../support/apiurl";

export const LoginSuccessAction = datauser => {
  return {
    type: "LOGIN_SUCCESS",
    payload: datauser
  };
};

export const Loginthunk = (username, password) => {
  return dispatch => {
    dispatch({ type: "LOGIN_LOADING" });
    Axios.get(`${APIURL}users?username=${username}&password=${password}`)
      .then(res => {
        if (res.data.length) {
          localStorage.setItem("bebas", res.data[0].id);
          dispatch(LoginSuccessAction(res.data[0]));
        } else {
          dispatch({ type: "LOGIN_ERROR", payload: "Wrong Password" });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "LOGIN_ERROR", payload: "server error" });
      });
  };
};

export const login_error = () => {
  return dispatch => {
    dispatch({ type: "LOGIN_ERROR", payload: "" });
  };
};

export const LogoutAction = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const changePassword = newpassword => {
  return {
    type: "CHANGE_PASSWORD",
    payload: newpassword
  };
};
