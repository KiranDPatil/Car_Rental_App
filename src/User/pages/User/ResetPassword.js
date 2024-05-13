import React, { useState } from "react";
import { url } from "../../../Commons/constants";
import axios from "axios";
import { useHistory } from "react-router";
import { Header } from "../../Components/Header";
function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(" ");
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");
  const [confiremPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const sendOtp = () => {
    if (email.length === 0) alert("Enter Email !");
    console.log(email);

    axios.post(url + "/email/sendotp/" + email).then((responce) => {
      const result = responce.data;
      if (result.status === "success") {
        setUser(result.data);
        console.log(result);
        alert("Otp Sent");
      }
    });
  };

  const VerifyOtp = () => {
    if (otp.length === 0) alert("Enter OTP !");
    else if (user.resetToken === otp) {
      alert("OTP is verified");
      let passDiv = document.getElementById("pass-div");
      passDiv.style.visibility = "visible";
      passDiv.style.position = "relative";

      let otpDiv = document.getElementById("otp-div");
      otpDiv.style.visibility = "hidden";
      otpDiv.style.position = "absolute";
    } else {
      alert("Wrong Token");
    }
  };
  const changePassword = () => {
    if (password.length === 0) alert("Enter Password");
    else if (confiremPassword.length === 0) alert("Confirm Password");
    else if (password != confiremPassword) alert("Password Not Matched...!");
    else {
      const data = new FormData();
      data.append("password", confiremPassword);
      data.append("user", user.userid);

      axios.put(url + "/email/reset", data).then((responce) => {
        const result = responce.data;
        if (result.status === "success") {
          console.log(result);
          alert("Password changed successfully");
          history.push("/signin");
        }
      });
    }
  };

  return (
    <div>
      <Header />
      <h1 className="title-header"> Reset Password</h1>
      <div>
        <div
          style={{ insetBlock: "30%" }}
          id="email-container"
          class="container"
        >
          <br />
          <br />
          <div class="card">
            <div id="otp-div">
              <div class="card-body align-items-center">
                <h5 class="card-title align-items-center d-flex justify-content-center">
                  <div className="container ">
                    <span class="label label-info">Email:</span>
                    <br />
                    <br />
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      type="email"
                      className="form-control"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                </h5>
                <br />

                <button
                  type="button"
                  onClick={sendOtp}
                  class="form-control btn btn-info "
                >
                  Send Otp
                </button>
            
              </div>

              <div class="card-body">
                <h5 class="card-title align-items-center  justify-content-center">
                  <div className="container ">
                    <span class="label label-info">Enter OTP Recieved:</span>
                    <br />
                    <br />

                    <input
                      onChange={(event) => {
                        setOtp(event.target.value);
                      }}
                      type="text"
                      id="input"
                      class="form-control"
                      required="required"
                       />
                  </div>
                </h5>
                <br />

                <button
                  class="form-control btn btn-info align-items-center  justify-content-center"
                  onClick={VerifyOtp}
                >
                  Verify Otp
                </button>
              </div>
            </div>

            <div
              id="pass-div"
              style={{ visibility: "hidden", position: "absolute" }}
            >
              <div class="card-body">
                <h5 class="card-title align-items-center d-flex justify-content-center">
                  <div className="container ">
                    <span class="label label-info">Enter New Password *</span>
                    <input
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </h5>
                <br />
              </div>

              <div class="card-body">
                <h5 class="card-title align-items-center d-flex justify-content-center">
                  <div className="container ">
                    <span class="label label-info">Confirm Password *</span>
                    <input
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </h5>
                <br />

                <button
                  class="btn btn-info align-items-center justify-content-center"
                  onClick={changePassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
