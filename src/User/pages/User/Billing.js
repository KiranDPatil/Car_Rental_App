import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {url} from '../../../Commons/constants'
function Billing() {
  let booking = JSON.parse(sessionStorage.getItem("conBooking"));
  console.log(booking);
  const [debitCard, setDebitCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [booking1, setBooking] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);

  const [billStatus, setBillStatus] = useState(true);
  const history = useHistory();
  const showPayment = () => {
    document.getElementById("payment").style.visibility = "visible";
  };

   const AddDetailsToDB = () => {
     if (totalAmount.length === 0) {
       alert("Enter total Amount");
     } else {
     const data = new FormData();
     data.append("booking", booking.data.bookingid);
     data.append("totalAmount", totalAmount);
     data.append("billStatus", true);
     data.append("amountBalence", booking.data.securityDeposit);
     data.append("taxAmount", booking.data.taxAmount);
     data.append("billDate", new Date());
     // send the data to the API
     axios.post(url + "/billing/", data).then((response) => {
       const result = response.data;
       console.log(response.data);
       if (result.status === "success") {
         alert("Thank you for using our service");
         history.push("/");
       } else {
         alert("Error while booking");
       }
     });
   }
   };

  useEffect(() => {}, []);
  return (
    <div>
      <h1 className="title-header">Billing Form </h1>
      <hr />

      <div className="container">
        <h3>
          <u>
            <b className="title-header  ">Billing Details :</b>
          </u>
        </h3>

        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" class="form-label">
              <b>Name:</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              value={booking.data.username}
              readonly
              disabled
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              <b>Booking Id:</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              value={booking.data.bookingid}
              disabled
            />
          </div>

          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              <b>Car Category Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              value={booking.data.carVarient}
              disabled
            />
          </div>
          <div className="col-md-4">
            <label for="inputCity" class="form-label">
              <b>Pick Up Location</b>
            </label>
            <input
              value={booking.data.location}
              type="text"
              disabled
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              <b>From Date:</b>
            </label>
            <input
              type="date"
              Value={booking.data.fromDate}
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label for="inputZip" className="form-label">
              <b>To Date:</b>
            </label>
            <input
              Value={booking.data.toDate}
              disabled
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label for="inputZip" className="form-label">
              <b>Total Amount</b>
            </label>
            <input
              value={booking.data.amount + "   Rs."}
              disabled
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <label for="inputZip" className="form-label">
              <b>Deposit Amount:</b>
            </label>
            <input
              value={booking.data.securityDeposit + "   Rs."}
              disabled
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <label for="inputZip" className="form-label">
              <b>Tax Amount:</b>
            </label>
            <input
              Value={booking.data.taxAmount + "   Rs."}
              disabled
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <label for="inputZip" className="form-label">
              <b>Amount Payble:</b>
            </label>
            <input
              Value={
                booking.data.amount -
                booking.data.securityDeposit +
                booking.data.taxAmount +
                "   Rs."
              }
              disabled
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="form-control"
            />
          </div>

          <div className="title-header">
            <button className="btn btn-success" onClick={showPayment}>
              Pay Amount
            </button>
          </div>
          <div
            className="row g-3"
            id="payment"
            style={{ visibility: "hidden" }}
          >
            <h2>
              <u>
                <b>Payment Details:</b>
              </u>
            </h2>
            <div className="col-md-2">
              <label for="deposit" class="form-label">
                <b>Payment Amount:</b>
              </label>
              <input
                onChange={(e) => {
                  setTotalAmount(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label for="deposit" class="form-label">
                <b>Debit/Credit Card Number :</b>
              </label>
              <input
                onChange={(e) => {
                  setDebitCard(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label for="deposit" class="form-label">
                <b>Expiry Date:</b>
              </label>
              <input
                onChange={(e) => {
                  setExpiryDate(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <label for="deposit" class="form-label">
                <b>CVV *:</b>
              </label>
              <input
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="title-header">
              <button onClick={AddDetailsToDB} className="btn btn-primary">
                Confirm Payment
              </button>
              &nbsp;&nbsp;
              <button onClick={history.goBack} className="btn btn-warning ">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
