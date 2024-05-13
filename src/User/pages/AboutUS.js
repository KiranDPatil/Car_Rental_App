import React from "react";

function AboutUS() {
  return (
    <div>
      <div class="row" id="Reservation">
        <div class="col navMenu">
          <h2 class="text-center">~ About Our website ~</h2>
        </div>
      </div>
      <br />
      <div class="row bg-light">
        <div class="col-md-6">
          <h2 id="desc">Technologies Used</h2>
          <br />
          <div class="container">
            <p>Backend :- SpringBoot </p>
            <p>FrontEnd :- Reactjs </p>
            <p>Database :- MySQL</p>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-up">
          <h2 id="desc">Developers</h2>
          <br />
          <div class="container">
            <p>
              <i class="far fa-user"></i> Prashant Patil
            </p>
            <p>
              <i class="far fa-user"></i> Makarand Patil
            </p>
            <p>
              <i class="far fa-user"></i> Kiran Patil
            </p>
            <p>
              <i class="far fa-user"></i> Aakash Patel
            </p>
          </div>
        </div>
      </div>
      <div class="row footer bg-light">
        <div class="col">
          <p class="text-center">
            Follow us: &nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook" />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://instagram.com/">
              <i class="fab fa-instagram"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://tweeter.com/">
              <i class="fab fa-twitter"></i>
            </a>
          </p>
        </div>
        <div class="col">
          <p class="text-center">Copyright &copy; 2020</p>
        </div>
        <div class="col">
          <p class="text-center">Thank You...!!!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
