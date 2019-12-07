import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../apiurl";


class Home extends Component {
  state = {
    datamovies: []
  };
  componentDidMount() {
    Axios.get(`${APIURL}movies`)
      .then(res => {
        this.setState({ datamovies: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderMovies = () => {
    return this.state.datamovies.map((val, index) => {
      return (
        <div key={index} className="col-md-3 pb-3 pr-4 pl-4">
          <div className="card" style={{ width: "100%" }}>
            <div className="gambar">
              <img src={val.image} className="card-img-top" alt={val.title} />
            </div>
            <div className="card text">
              <h5 className="judul pelem">{val.title}</h5>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="my-2">
        <h3
          style={{
            textalign: "left",
            paddingLeft: "10%",
            height: "8px",
            paddingTop: "5px"
          }}
        >
          List
        </h3>
        <br />
        <div
          className="row py-3"
          style={{ paddingLeft: "8%", paddingRight: "8px" }}
        >
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default Home;
