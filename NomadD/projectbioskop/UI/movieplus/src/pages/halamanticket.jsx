import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import Numeral from "numeral";
import { Redirect } from "react-router-dom";
import { APIURL } from "../support/apiurl";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

class BuyTicket extends Component {
  state = {
    datamovie: {},
    seats: 260,
    baris: 0,
    booked: [],
    loading: true,
    jam: 12,
    pilihan: [],
    openmodealCart: false,
    redirectHome: false
  };

  componentDidMount() {
    this.showtimeChange();
  }

  showtimeChange = () => {
    var studioId = this.props.location.state.studioId;
    var movieId = this.props.location.state.id;
    Axios.get(`${APIURL}studios/${studioId}`)
      .then(res1 => {
        Axios.get(`${APIURL}orders?movieId=${movieId}&jadwal=${this.state.jam}`)
          .then(res2 => {
            var arrAxios = [];
            res2.data.forEach(val => {
              arrAxios.push(
                Axios.get(`${APIURL}ordersdetails?orderId=${val.id}`)
              );
            });
            var arrAxios2 = [];
            Axios.all(arrAxios)
              .then(res3 => {
                console.log(res3);
                res3.forEach(val => {
                  arrAxios2.push(...val.data);
                });
                console.log(arrAxios2);
                this.setState({
                  datamovie: this.props.location.state,
                  seats: res1.data.jumlahKursi,
                  baris: res1.data.jumlahKursi / 20,
                  booked: arrAxios2,
                  loading: false
                });
              })
              .catch(err3 => {
                console.log(err3);
              });
          })
          .catch(err2 => {
            console.log(err2);
          });
      })
      .catch(err1 => {
        console.log(err1);
      });
  };

  onButtonJamClick = val => {
    this.setState({ jam: val, pilihan: [] });
    this.showtimeChange();
  };

  onPilihSeat = (row, seat) => {
    var pilihan = this.state.pilihan;
    pilihan.push({ row: row, seat });
    this.setState({ pilihan: pilihan });
  };

  onCancelSeatClick = (row, seat) => {
    var pilihan = this.state.pilihan;
    var rows = row;
    var seats = seat;
    var arr = [];
    for (var i = 0; i < pilihan.length; i++) {
      if (pilihan[i].row !== rows || pilihan[i].seat !== seats) {
        arr.push(pilihan[i]);
      }
    }
    this.setState({ pilihan: arr });
  };

  onOrderClick = () => {
    var userId = this.props.UserId;
    var movieId = this.state.datamovie.id;
    var pilihan = this.state.pilihan;
    var jadwal = this.state.jam;
    var totalHarga = this.state.pilihan.length * 50000;
    var bayar = false;
    var dataorders = {
      userId,
      movieId,
      totalHarga,
      jadwal,
      bayar
    };
    Axios.post(`${APIURL}orders`, dataorders)
      .then(res => {
        var dataorderDetail = [];
        pilihan.forEach(val => {
          dataorderDetail.push({
            orderId: res.data.id,
            row: val.row,
            seat: val.seat
          });
        });
        var dataOrderDetailBaru = [];
        dataorderDetail.forEach(val => {
          console.log("Order", val);
        });
        Axios.all(dataOrderDetailBaru)
          .then(resNew => {
            console.log("OrderNew", resNew.data);
            this.setState({ openmodealCart: true });
          })
          .catch(errNew => {
            console.log(errNew);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderPriceQty = () => {
    var ticketQty = this.state.pilihan.length;
    var ticketPrice = ticketQty * 50000;
    return (
      <div>
        {this.state.pilihan.length} x &nbsp;
        {`Rp ${Numeral(50000).format("0,0.00")}`} = &nbsp;
        {`Rp ${Numeral(ticketPrice).format("0,0.00")}`}
      </div>
    );
  };

  renderseat = () => {
    var arr = [];
    for (let i = 0; i < this.state.baris; i++) {
      arr.push([]);
      for (let j = 0; j < this.state.seats / this.state.baris; j++) {
        arr[i].push(1);
      }
    }
    console.log(this.state.booked);
    for (let j = 0; j < this.state.booked.length; j++) {
      arr[this.state.booked[j].row][this.state.booked[j].seat] = 3;
    }
    for (let a = 0; a < this.state.pilihan.length; a++) {
      arr[this.state.pilihan[a].row][this.state.pilihan[a].seat] = 2;
    }

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var jsx = arr.map((val, index) => {
      return (
        <div key={index}>
          {val.map((val1, i) => {
            if (val1 === 3) {
              return (
                <button
                  key={i}
                  disabled
                  className="rounded btn mr-2 mt-2 btn-danger text-align-center"
                >
                  {alphabet[index] + (i + 1)}
                </button>
              );
            } else if (val1 === 2) {
              return (
                <button
                  key={i}
                  onClick={() => this.onCancelSeatClick(index, i)}
                  className="rounded btn-order mr-2 mt-2 pilih text-center"
                >
                  {alphabet[index] + (i + 1)}
                </button>
              );
            }
            return (
              <button
                key={i}
                onClick={() => this.onPilihSeat(index, i)}
                className="rounded btn-order mr-2 mt-2 text-center"
              >
                {alphabet[index] + (i + 1)}
              </button>
            );
          })}
        </div>
      );
    });
    return jsx;
  };

  renderButton = () => {
    return this.state.datamovie.jadwal.map((val, index) => {
      if (this.state.jam === val) {
        return (
          <button
            key={index}
            disabled
            className="mx-2 btn btn-primary"
            disabled
          >
            {val}.00
          </button>
        );
      }
      return (
        <button
          className="mx-2 btn btn-outline-primary"
          onClick={() => this.onButtonJamClick(val)}
        >
          {val}.00
        </button>
      );
    });
  };

  render() {
    if (this.props.location.state && this.props.Authlog) {
      if (this.state.redirectHome) {
        return <Redirect to={"/"} />;
      }
      return (
        <center>
          <Modal isOpen={this.state.openmodealCart}>
            <ModalBody>Item Added to Cart</ModalBody>
            <ModalFooter>
              <button onClick={() => this.setState({ redirectHome: true })}>
                OK
              </button>
            </ModalFooter>
          </Modal>

          {/* content */}

          <div className="mt-1">
            {this.state.datamovie.title}
            {this.state.loading ? null : this.renderButton()}
          </div>
          <div className="mt-1">
            {this.state.pilihan.length ? (
              <button onClick={this.onOrderClick} className="btn btn-success">
                Order Ticket!
              </button>
            ) : (
              <button disabled className="btn btn-success">
                Choose Movie
              </button>
            )}
          </div>
          {this.renderPriceQty()}
          <div className="d-flex justify-content-center mt-4">
            <div>{this.state.loading ? null : this.renderseat()}</div>
          </div>
        </center>
      );
    }
    return <div>404 not found</div>;
  }
}

const MapStateToProps = state => {
  return {
    Authlog: state.Auth.login,
    UserId: state.Auth.id
  };
};

export default connect(MapStateToProps)(BuyTicket);
