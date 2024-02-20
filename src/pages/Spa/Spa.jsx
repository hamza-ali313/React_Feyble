import React from "react";
import spaCard1 from "../../assets/images/spa-card2.svg";
import spaCard2 from "../../assets/images/spa-card1.svg";
import spaCard3 from "../../assets/images/spa-card3.svg";
import disc3 from "../../assets/images/discount3.png";
import { HiArrowLongRight } from "react-icons/hi2";

import "./Spa.css";

const Spa = () => {
  return (
    <>
      <section className="spa-pg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Choose Your Therapy</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 pb-4 pb-lg-0">
              <div className="spa-card">
                <h2>Contrast Therapy</h2>
                <img className="img-fluid" src={spaCard1} alt />
                <div className="spa-card-hover">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href
                    className="btn8"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 pb-4 pb-lg-0">
              <div className="spa-card">
                <h2>Sound Therapy</h2>
                <img className="img-fluid" src={spaCard2} alt />
                <div className="spa-card-hover">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href
                    className="btn8"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 pb-0 pb-lg-0">
              <div className="spa-card">
                <h2>Practitioners</h2>
                <img className="img-fluid" src={spaCard3} alt />
                <div className="spa-card-hover">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href
                    className="btn8"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pratitionars-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="row align-items-center py-2">
                <div className="col-12">
                  <h2>John Doe</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-discounts">
        <div className="container-fluid p-0">
          <div className="row ">
            <div className="col-12 col-lg-6 pe-0">
              <div className="discount3-img">
                <img className="img-fluid" src={disc3} alt />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-0">
              <div className="discount-txt discount-txt3">
                <h4>
                  <a href="members.php">
                    Become A Resident
                    <h4 class="icon">
                      <HiArrowLongRight  />
                    </h4>
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate sequi iusto natus ipsa cumque? Iure ratione harum
                  unde quos id.
                </p>
                <ul>
                  <li>
                    <i className="fa-light fa-heart" />
                    <div>
                      <h6>lorem ipsum dolor</h6>
                      <p>
                        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-light fa-star" />
                    <div>
                      <h6>lorem ipsum dolor</h6>
                      <p>
                        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-light fa-user" />
                    <div>
                      <h6>lorem ipsum dolor</h6>
                      <p>
                        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spa;
