const INITIAL_STATE = {
  id: "",
  username: "",
  password: "",
  role: "",
  error: "",
  login: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload, login: true };
    case "LOGIN_LOADING":
      return { ...state, loading: true, error: "" };
    case "LOGIN_ERROR":
      return { ...state, loading: true, error: "" };
    case "CHANGE_PASSWORD":
      return { ...state, ...action.payload };
    case "LOGOUT_SUCCESS":
      return INITIAL_STATE;
    default:
      return state;
  }
};
