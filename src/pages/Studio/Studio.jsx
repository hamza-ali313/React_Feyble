import React from "react";
import std1 from "../../assets/Images/studio-card1.svg";
import std2 from "../../assets/Images/studio-card2.svg";
import std3 from "../../assets/Images/studio-card3.svg";
import std4 from "../../assets/Images/studio-card4.svg";
import "./Studio.css";
import BecomeResi from "../../components/Become_A_Resi/Become_A_Resi";

const Studio = () => {
  return (
    <>
      <section className="studio-pg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="studio-left">
                <h1>THE STUDIOS</h1>
                <h2>
                  AT <span>FEYBL</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row flex-wrap">
                <div className="col-12 col-sm-6 mb-4">
                  <div className="spa-card">
                    <img className="img-fluid" src={std1} alt="" />
                    <div className="yellow-tap">
                      <h2>Move</h2>
                    </div>
                    <div className="spa-card-hover">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a
                        className="btn8"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6  mb-4 mb-sm-0">
                  <div className="spa-card">
                    <img className="img-fluid" src={std2} alt="" />
                    <div className="yellow-tap">
                      <h2>Capture</h2>
                    </div>
                    <div className="spa-card-hover">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a
                        className="btn8"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-4">
                  <div className="spa-card">
                    <img className="img-fluid" src={std3} alt="" />
                    <div className="yellow-tap">
                      <h2>Speak</h2>
                    </div>
                    <div className="spa-card-hover">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a
                        className="btn8"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6  mb-4 mb-sm-0">
                  <div className="spa-card">
                    <img className="img-fluid" src={std4} alt="" />
                    <div className="yellow-tap">
                      <h2>Reflect</h2>
                    </div>
                    <div className="spa-card-hover">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a
                        className="btn8"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
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

      <BecomeResi />
    </>
  );
};

export default Studio;
