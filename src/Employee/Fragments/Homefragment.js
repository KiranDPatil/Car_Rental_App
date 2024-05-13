import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Commons/constants";

const Homefragment = () => {
  const [user, setUser] = useState(0);
  const [carTypes, setCarTypes] = useState(0);
  const [carCategories, setCarCategories] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [cars, setCars] = useState(0);
  const [drivers, setDrivers] = useState(0);

  useEffect(() => {
    axios.get(url + "/user/role/user").then((res) => {
      console.log(res.data);
      setUser(Object.keys(res.data).length - 1);
    });
  }, []);

  useEffect(() => {
    axios.get(url + "/carType/").then((res) => {
      const result = res.data;
      console.log(res.data);
      sessionStorage.setItem("carType", JSON.stringify(result));
      setUser(Object.keys(res.data).length);
      let count = -1;
      for (let key in res) {
        count++;
      }
      console.log(count);
      //   console.log(res.data.length);
    });
  }, []);

  return (
    <div class="container">
      <br />
      <h3 className="title"> Employee DashBoard</h3>
      <br />
      <br />
      <div class="row">
        <div  class="col-sm text-white bg-dark rounded-top">
          <div   class="card-body ">
            <h5 class="card-title">Total Car Typs</h5>
            <p class="card-text">{carTypes}</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-info rounded-top">
            <div class="card-body">
              <h5 class="card-title">Total Car Categories</h5>
              <p class="card-text">{carCategories}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-primary rounded-top">
            <div class="card-body">
              <h5 class="card-title">Registerd Users</h5>
              <p class="card-text">{user}</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="row">
        <div class="col-sm text-white bg-danger rounded-bottom">
          <div class="card-body">
            <h5 class="card-title">Total Bookings </h5>
            <p class="card-text">{bookings}</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-warning rounded-bottom">
            <div class="card-body">
              <h5 class="card-title">Total Cars's</h5>
              <p class="card-text">{cars}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm text-white bg-success rounded-bottom ">
            <div class="card-body">
              <div class="card-title ">Total Drivers</div>

              <p className="card-text">{drivers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefragment;
