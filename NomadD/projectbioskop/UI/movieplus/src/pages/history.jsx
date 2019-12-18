import React, { Component } from "react";
import Axios from "axios";
import {} from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Table, TableHead, TableBody, TableRow, TableCell } from "reactstrap";
import { APIURL } from "./../support/apiurl";

class TransHistory extends Component {
  state = {
    datacart: null,
    loading: true,
    AuthId: "",
    modalDetail: false,
    modalDaftar: ""
  };

  componentDidMount() {
    Axios.get(
      `${APIURL}order?_expand=movie&userId=${this.props.AuthId}&pay=true`
    )
      .then(res => {
        var dataTrans = res.data;
        var qtyTrans = [];
        console.log(dataTrans);
        res.data.forEach(val => {
          qtyTrans.push(Axios.get(`${APIURL}orderdetail?orderId=${val.id}`));
        });
        console.log(dataTrans);
        var qtytrans1 = [];
        Axios.all(qtyTrans1)
          .then(res1 => {
            console.log(res1);
            res1.forEach(val => {
              qtytrans1.push(val.data);
            });
            console.log(qtytrans1);
            var dataTrans1 = [];
            dataTrans.forEach((val, index) => {
              dataTrans1.push({ ...val, qty: qtytrans1[index] });
            });
            console.log(dataTrans1);
            this.setState({ dataTrans: dataTrans1 });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderTrans = () => {
    if (this.state.datacart !== null) {
      if (this.state.datacart.length === 0) {
        return (
          <tr>
            <td>You Have not Completed Payment</td>
          </tr>
        );
      }

      return this.state.datacart.map((val, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{val.movie.title}</TableCell>
            <TableCell>{val.jadwal}</TableCell>
            <TableCell>{val.qty.length}</TableCell>
            <TableCell>Rp.{val.totalHarga}</TableCell>
            <TableCell>
              <button
                className="mt-2 mb-2 mr-2 btn btn-info"
                onClick={() =>
                  this.setState({ modalDetail: true, modalDaftar: index })
                }
              >
                Details
              </button>
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  transactionInfo = () => {
    return (
      <div>
        Detail Transactions {this.state.datacart[this.state.modalDaftar].id}{" "}
      </div>
    );
  };

  render() {
    if (this.props.AuthId) {
      return (
        <div>
          <div className="mt-3 mb-2">
            Transaction Details of {this.props.AuthUsername}
          </div>
          <Modal
            isOpen={this.state.modalDetail}
            toggle={() => this.setState({ modalDetail: false })}
            size="sm"
          >
            <ModalHeader>
              {this.state.modalDaftar !== "" ? this.transactionInfo() : null}
            </ModalHeader>
            <ModalBody>
              <center>
                Success
                <table className="mt-2">
                  <thead>
                    <tr>
                      <td style={{ width: "50px" }}>No.</td>
                      <td style={{ width: "100px" }}>Seats</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.modalDaftar !== ""
                      ? this.state.datacart[this.state.modalDaftar].qty.map(
                          (val, index) => {
                            return (
                              <tr key={index}>
                                <td style={{ width: "50px" }}>{index + 1}</td>
                                <td style={{ width: "100px" }}>
                                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[val.row]}
                                  {val.seat + 1}
                                </td>
                              </tr>
                            );
                          }
                        )
                      : null}
                  </tbody>
                </table>
              </center>
            </ModalBody>
          </Modal>
          <center>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Movies</TableCell>
                  <TableCell>Jadwal</TableCell>
                  <TableCell>Jumlah</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTrans()}</TableBody>
            </Table>
          </center>
        </div>
      );
    }
    return <p>404 not found</p>;
  }
}

const MapStateToProps = state => {
  return {
    AuthUsername: state.Auth.username,
    AuthLog: state.Auth.login,
    AuthId: state.Auth.id
  };
};

export default connect(MapStateToProps)(TransHistory);
