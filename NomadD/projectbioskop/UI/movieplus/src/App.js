import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/homepage";
import { Switch, Route } from "react-router-dom";
import ManageAdmin from "./pages/halamanadmin";
import { APIURL } from "./support/apiurl";
import { connect } from "react-redux";
import Axios from "axios";
import { LoginSuccessAction } from "./redux/actions";
import Login from "./pages/loginpage";
import MovieDetail from "./pages/moviedetail";
import BuyTicket from "./pages/halamanticket";
import Cart from "./pages/cart";
import Register from "./pages/register";
import Changepass from "./pages/changepassword";
class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    var id = localStorage.getItem("bebas");
    Axios.get(`${APIURL}user/${id}`)
      .then(res => {
        this.props.LoginSuccessAction(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/halamanadmin"} exact>
            <ManageAdmin />
          </Route>
          <Route path="/moviedetail/:id" component={MovieDetail} exact />
          <Route path={"/halamanticket"} component={BuyTicket} exact />
          <Route path={"/loginpage"} exact component={Login} />
          <Route exact path={"/cart"} component={Cart} />
          <Route path={"/register"} exact component={Register} />
          <Route path={"/changepassword"} exact component={Changepass} />
        </Switch>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Authlog: state.Auth.login
  };
};
export default connect(MapStateToProps, { LoginSuccessAction })(App);
