import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../support/apiurl";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

class MovieDetail extends Component {
  state = {
    datadetail: {},
    traileropen: false,
    notlogin: false,
    toLogin: false,
    buytiket: false
  };

  componentDidMount() {
    Axios.get(`${APIURL}movies/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ datadetail: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //BUY TICKET BUTTON

  buyTicketButton = () => {
    if (this.props.Authlog) {
      this.setState({ buytiket: true });
    } else {
      this.setState({ notlogin: true });
    }
  };

  render() {
    if (this.state.toLogin) {
      return <Redirect to={"/loginpage"} />;
    }
    if (this.state.buytiket) {
      return (
        <Redirect
          to={{ pathname: "/halamanticket", state: this.state.datadetail }}
        />
      );
    }
    return (
      <div>
        {/* MODAL TRAILER */}
        <Modal
          isOpen={this.state.traileropen}
          centered
          toggle={() => this.setState({ traileropen: false })}
        >
          <ModalBody className="p=0 bg-transparent">
            <iframe
              width="100%"
              title={this.state.datadetail.title}
              height="100%"
              src={this.state.datadetail.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalBody>
        </Modal>
        {/* MODAL LOGIN */}
        <Modal
          isOpen={this.state.notlogin}
          centered
          toggle={() => this.setState({ notlogin: false })}
        >
          <ModalBody>Login to book your Ticket</ModalBody>
          <ModalFooter>
            <button onClick={() => this.setState({ toLogin: true })}>Ok</button>
          </ModalFooter>
        </Modal>
        <div className="row p-3">
          <div className="col-md-5">
            <img
              style={{ marginLeft: "0" }}
              src={this.state.datadetail.image}
              alt={this.state.datadetail.title}
              height="400px"
            />
            <div className="mt-3">{this.state.datadetail.title}</div>
          </div>
          <div className="col-md-2">
            <div className="mt-1">
              Title<span className="ml-4">:</span>
            </div>
            <div className="mt-1">
              Sinopsis<span className="ml-4">:</span>
            </div>
          </div>
          <div className="col-md-5">
            <div className="mt-1">{this.state.datadetail.title}</div>
            <div className="mt-1">{this.state.datadetail.sinopsis}</div>
            <div className="mt-3">
              <button
                className="mr-3 btn btn-outline-success"
                onClick={this.buyTicketButton}
              >
                Buy Ticket
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => this.setState({ traileropen: true })}
              >
                Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Authlog: state.Auth.login
  };
};
export default connect(MapStateToProps)(MovieDetail);
