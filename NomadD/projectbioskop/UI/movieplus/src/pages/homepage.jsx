import React, { Component } from "react";
import Axios from "axios";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { APIURL } from "../support/apiurl";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    moviesData: [],
    ModalShowDetail: false
  };

  componentDidMount() {
    Axios.get(`${APIURL}movies`)
      .then(res => {
        this.setState({ moviesData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderMovies = () => {
    return this.state.moviesData.map((val, index) => {
      return (
        <div key={index} className="col-md-3 pb-3 pr-4 pl-4">
          <div
            className="movie-card"
            style={{ width: "100%", border: "transparent" }}
          >
            <div className="gambar">
              <Link to={"/moviedetail/" + val.id}>
                <img
                  src={val.image}
                  className="card-img-top card-image"
                  alt={val.title}
                />
              </Link>
            </div>
            <div className="card-body">
              <h6 className="card-title font-weight-bold">{val.title}</h6>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="my-2" style={{ width: "100%" }}>
        {this.state.ModalShowDetail ? (
          <Modal
            isOpen={this.state.ModalShowDetail}
            toggle={() => this.setState({ ModalShowDetail: false })}
          >
            <ModalHeader>Movie Info</ModalHeader>
            <ModalBody>
              <h5>Content</h5>
            </ModalBody>
          </Modal>
        ) : null}
        <h3
          style={{
            textAlign: "left",
            paddingLeft: "10%",
            height: "8px",
            paddingTop: "5px"
          }}
        >
          List Movie
        </h3>
        <br />

        <div
          className="row py-3 w-100"
          style={{ paddingLeft: "8%", paddingRight: "8%" }}
        >
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default Home;
