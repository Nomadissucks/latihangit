import React, { Component } from "react";
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MySwal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

class Home extends Component {
  state = {
    data: [],
    indexedit: -1
  };

  componentDidMount() {
    this.setState({
      data: [
        { kegiatan: "Lari", status: true, tanggal: "2019-11-27" },
        { kegiatan: "Jalan", status: false, tanggal: "2019-11-28" }
      ]
    });
  }

  onAdddataClick = () => {
    var kegiatan = this.refs.kegiatan.value;
    var tanggal = this.refs.tanggal.value;
    var obj = {
      kegiatan,
      status: false,
      tanggal
    };
    if (kegiatan === "" || tanggal === "") {
      MySwal.fire("What?!", "You have not input anything!", "warning");
    } else {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Your Activity has been added!",
        showConfirmButton: false,
        timer: 1500
      });
      var newdata = [...this.state.data, obj];
      this.setState({ data: newdata, isopen: false });
    }
  };

  onSavedataEdit = index => {
    var kegiatan = this.refs.editkegiatan.value;
    var tanggal = this.refs.edittanggal.value;
    var status = this.refs.editstatus.value;
    var obj = {
      kegiatan,
      status,
      tanggal
    };
    this.state.data.splice(index, 1, obj);
    this.setState({ indexedit: -1 });

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Your Activity has been updated!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  onCancelEdit = () => {
    this.setState({ indexedit: -1 });
  };

  onDeletedataClick = index => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        var data = this.state.data;
        data.splice(index, 1);
        this.setState({ data: data });
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your data has been deleted", "error");
      }
    });
  };

  onEditdataClick = index => {
    this.setState({ indexedit: index });
    this.renderTodo();
  };

  renderTodo = () => {
    const { indexedit } = this.state;
    return this.state.data.map((val, index) => {
      if (indexedit === index) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>
              <input
                type="text"
                ref="editkegiatan"
                defaultValue={val.kegiatan}
                placeholder="Enter New Activity"
              />
            </td>
            <td>
              {val.status ? (
                <select ref="editstatus">
                  <option selected value="Sudah">
                    Done
                  </option>
                  <option value="Belum">Not Done</option>
                </select>
              ) : (
                <select>
                  <option value="Sudah">Done</option>
                  <option selected value="Belum">
                    Not Done
                  </option>
                </select>
              )}
            </td>
            <td>
              <input type="date" ref="edittanggal" defaultValue={val.tanggal} />
            </td>
            <td>
              <button
                className="btn btn-primary btn-success"
                onClick={() => this.onSavedataEdit(index)}
              >
                Save
              </button>
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => this.onCancelEdit()}
              >
                Cancel
              </button>
            </td>
          </tr>
        );
      }
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{val.kegiatan}</td>
          <td>{val.status ? "Done" : "Not Done"}</td>
          <td>{val.tanggal}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => this.onEditdataClick(index)}
            >
              Edit
            </button>
            &nbsp; &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => this.onDeletedataClick(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isopen}
          toggle={() => this.setState({ isopen: false })}
        >
          <ModalHeader>Add Data</ModalHeader>
          <ModalBody>
            <input
              className="form-control"
              placeholder="Enter Activity"
              type="text"
              ref="kegiatan"
            />
            <br />
            <input className="form-control" type="date" ref="tanggal" />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-light" onClick={this.onAdddataClick}>
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => this.setState({ isopen: false })}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>
        <center>
          <Table dark>
            <thead>
              <tr>
                <td>No</td>
                <td>Kegiatan</td>
                <td>Status</td>
                <td>Tanggal</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{this.renderTodo()}</tbody>
          </Table>
        </center>
        <div>
          <button
            className="btn btn-success rounded-pill"
            onClick={() => this.setState({ isopen: true })}
          >
            Add Data
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
