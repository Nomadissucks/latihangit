import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../support/apiurl";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// import { Table } from "reactstrap";

class Cart extends Component {
  state = {
    datacart: null,
    bookagain: false,
    modaldetail: false,
    detail: null,
    totalHarga: 0
  };

  componentDidMount() {
    Axios.get(
      `${APIURL}orders?_expand=movie&userId=${this.props.UserId}&bayar=false`
    )
      .then(res => {
        var datacart = res.data;
        var qtyArr = [];
        res.data.forEach(e => {
          qtyArr.push(Axios.get(`${APIURL}ordersdetails?orderId=${e.id}`));
        });
        var qtyArrsum = [];
        Axios.all(qtyArr)
          .then(res1 => {
            res1.forEach(val => {
              qtyArrsum.push(val.data);
            });

            var dataFinal = [];
            datacart.forEach((val, index) => {
              dataFinal.push({ ...val, qty: qtyArrsum[index] });
            });
            this.setState({ datacart: dataFinal });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  tombolDetail = index => {
    console.log(this.state.datacart[index].id);
    var id = this.state.datacart[index].id;
    Axios.get(`${APIURL}ordersdetails?orderId=${id}`).then(res => {
      var detailfilm = res.data;
      var seat = [];
      var row = [];
      detailfilm.map((val, index) => {
        seat.push(val.seat);
        row.push(val.row);
      });
      var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var posisi = [];
      for (var i = 0; i < seat.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
          if (row[i] === j) {
            posisi.push(alphabet[j] + (seat[i] + 1));
          }
        }
      }
      this.setState({ detail: posisi });
      this.setState({ modaldetail: true });
    });
  };

  renderCart = () => {
    if (this.state.datacart !== null) {
      if (this.state.datacart.length === 0) {
        return (
          <tr>
            <td></td>
            <td>Cart Empty</td>
          </tr>
        );
      }

      return this.state.datacart.map((val, index) => {
        return (
          <tr key={index}>
            <td style={{ width: 100 }}>{index + 1}</td>
            <td style={{ width: 300 }}>{val.movie.title}</td>
            <td style={{ width: 100 }}>{val.jadwal}</td>
            <td style={{ width: 100 }}>{val.qty.length}</td>
            <td style={{ width: 100 }}>Rp {val.totalHarga}</td>
            <td style={{ width: 100 }}>
              <button
                onClick={() => this.tombolDetail(index)}
                className="btn btn-outline-dark"
              >
                Details
              </button>
            </td>
          </tr>
        );
      });
    }
  };

  //   buttonCheckout = () => {
  //     var x = new Date();
  //     var tanggal = x.getDate() + "-" + x.getMonth() + "-" + x.getFullYear();
  //     if (this.state.datacart.length) {
  //       Axios.get(`${APIURL}order?userId=${this.props.UserId}`)
  //         .then(res => {
  //         //   var susunan = [];
  //           res.data.forEach((val, index) => {
  //             susunan.push(
  //               Axios.patch(`${APIURL}order/${val.id}`, {
  //                 bayar: true
  //               })
  //             );
  //           });
  //           console.log(sususan);
  //           Axios.all(susunan)
  //             .then(res1 => {
  //               console.log(res1);
  //               window.location.reload();
  //             })
  //             .catch(err1 => {
  //               console.log(err1);
  //             });
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     }
  //   };

  render() {
    if (this.props.UserId && this.props.role === "user") {
      if (this.state.bookagain) {
        return <Redirect to={"/"} />;
      }
      return (
        <div>
          <Modal
            centered
            isOpen={this.state.modaldetail}
            toggle={() => this.setState({ modaldetail: false })}
          >
            <ModalHeader>
              <h4 className="font-weight-bold">Details</h4>
            </ModalHeader>
            <ModalBody>
              <div className="d-flex mb-4">
                <h6 className="mr-3 font-weight-bolder">Seat:</h6>
                {this.state.detail.map((val, i) => {
                  return (
                    <button
                      className="btn btn-outline-info mr-2 px-1 py-0 font-small"
                      key={i}
                    >
                      {val}
                    </button>
                  );
                })}
                <div>
                  <h6 className="font-weight-bolder">
                    Total: {this.state.detail.length}
                  </h6>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                onClick={() => this.setState({ modaldetail: false })}
              >
                OK
              </button>
            </ModalFooter>
          </Modal>
          <div className="container" style={{ width: "600px" }}>
            <center>
              <Table striped style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ width: 100 }}>#</th>
                    <th style={{ width: 300 }}>Title</th>
                    <th style={{ width: 100 }}>Jadwal</th>
                    <th style={{ width: 100 }}>Jumlah</th>
                    <th style={{ width: 100 }}>Harga</th>
                    <th style={{ width: 100 }}>Detail</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot></tfoot>
              </Table>
            </center>
            <div className="d-flex">
              <h6 className="p ml-auto font-weight-bolder">
                Total harga: Rp.000.000
              </h6>
            </div>
            <button
              onClick={() => this.setState({ bookagain: true })}
              className="btn btn-outline-primary"
            >
              Book Another
            </button>
            <button
              className="btn btn-success ml-3"
              onClick={this.buttonCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      );
    }
    return <Redirect to={"/notfound"} />;
  }
}

const MapStateToProps = state => {
  return {
    UserId: state.Auth.id,
    AuthLog: state.Auth.login,
    role: state.Auth.role
  };
};

export default connect(MapStateToProps)(Cart);
