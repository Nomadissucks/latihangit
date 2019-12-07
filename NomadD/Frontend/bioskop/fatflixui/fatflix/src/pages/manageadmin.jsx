import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  //   TableFooter,
  TableRow
} from "@material-ui/core";
import Axios from "axios";
import { APIURL } from "../apiurl";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class ManageAdmin extends Component {
  state = { datafilm: [], readmoreselected: -1, indexedit: -1 };

  componentDidMount() {
    Axios.get(`${APIURL}movies`)
      .then(res => {
        this.setState({ datafilm: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSaveFilm = () => {
    var jadwal = [];
    var jadwaltemplate = [12, 14, 16, 18, 20];
    for (var i = 0; i < jadwaltemplate.length; i++) {
      if (this.refs[`jadwal${i}`].checked) {
        jadwal.push(jadwaltemplate[i]);
      }
    }
    var iniref = this.refs;
    var title = iniref.title.value;
    var image = iniref.image.value;
    var sinopsis = iniref.sinopsis.value;
    var durasi = iniref.durasi.value;
    var genre = iniref.genre.value;
    var produksi = "Kimia Farma";
    var sutradara = iniref.sutradara.value;
    var data = {
      title,
      image,
      sinopsis,
      sutradara,
      genre,
      durasi,
      produksi,
      jadwal
    };
    Axios.post(`${APIURL}movies`, data)
      .then(() => {
        Axios.get(`${APIURL}movies`)
          .then(res => {
            this.setState({ datafilm: res.data, modaladd: false });
          })
          .catch(err => {
            console.log("get " + err);
          });
      })
      .catch(err => {
        console.log("post " + err);
      });
  };

  onFilmEdit = index => {};

  renderMovies = () => {
    const { indexedit } = this.state;
    return this.state.datafilm.map((val, index) => {
      if (indexedit === index) {
        return (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <input
                type="text"
                ref="edittitle"
                defaultvalue={val.title}
                placeholder="Enter New Title"
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                ref="editimage"
                defaultvalue={val.image}
                placeholder="Enter New Image"
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                ref="editsinopsis"
                defaultvalue={val.sinopsis}
                placeholder="Enter Synopsis"
              />
            </TableCell>
          </TableRow>
        );
      }
    });
    return this.state.datafilm.map((val, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{val.title}</TableCell>
          <TableCell>
            <img src={val.image} alt={val.title} height="200px" />
          </TableCell>
          {this.state.readmoreselected === index ? (
            <TableCell>
              {val.sinopsis} &nbsp;
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => this.setState({ readmoreselected: -1 })}
              >
                Read Less
              </span>
            </TableCell>
          ) : (
            <TableCell>
              {val.sinopsis.split("").filter((val, index) => index <= 50)}
              &nbsp;
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => this.setState({ readmoreselected: index })}
              >
                Read More
              </span>
            </TableCell>
          )}
          <TableCell>{val.sutradara}</TableCell>
          <TableCell>{val.durasi}</TableCell>
          <TableCell>
            <button className="btn btn-outline-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
          </TableCell>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div className="mx-3">
        <Modal
          isOpen={this.state.modaladd}
          toggle={() => this.setState({ modaladd: false })}
        >
          <ModalHeader>Add Data</ModalHeader>
          <ModalBody>
            <input
              type="text"
              ref="title"
              placeholder="title"
              className="form-control"
            />
            <input
              type="text"
              ref="image"
              placeholder="image"
              className="form-control"
            />
            <input
              type="text"
              ref="sinopsis"
              placeholder="sinopsis"
              className="form-control"
            />
            <input
              type="text"
              ref="sutradara"
              placeholder="sutradara"
              className="form-control"
            />
            <input
              type="text"
              ref="genre"
              placeholder="genre"
              className="form-control"
            />
            <input
              type="text"
              ref="durasi"
              placeholder="durasi"
              className="form-control"
            />
            Jadwal:
            <input type="Checkbox" ref="jadwal0" /> 12.00
            <input type="Checkbox" ref="jadwal1" /> 14.00
            <input type="Checkbox" ref="jadwal2" /> 16.00
            <input type="Checkbox" ref="jadwal3" /> 18.00
            <input type="Checkbox" ref="jadwal4" /> 20.00
          </ModalBody>
          <ModalFooter>
            <button onClick={this.onSaveFilm}>Save</button>
            &nbsp; &nbsp;
            <button onClick={() => this.setState({ modaladd: false })}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
        <button
          onClick={() => this.setState({ modaladd: true })}
          className="btn btn-success"
        >
          Add
        </button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Judul</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Sinopsis</TableCell>
              <TableCell>Produser</TableCell>
              <TableCell>Durasi</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderMovies()}</TableBody>
        </Table>
      </div>
    );
  }
}

export default ManageAdmin;
