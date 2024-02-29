import React from "react";
import spaCard1 from "../../assets/Images/spa-card2.svg";
import spaCard2 from "../../assets/Images/spa-card1.svg";
import spaCard3 from "../../assets/Images/spa-card3.svg";
import "./Spa.css";
import BecomeResi from "../../components/Become_A_Resi/Become_A_Resi";

const Spa = () => {
  const data = [
    {
      id: 1,
      img: spaCard1,
      heading: "Contrast Therapy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Book Now",
    },
    {
      id: 2,
      img: spaCard2,
      heading: "Sound Therapy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Book Now",
    },
    {
      id: 3,
      img: spaCard3,
      heading: "Practitioners",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn: "Book Now",
    },
  ]

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
            {data.map(item => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 pb-4 pb-lg-0">
                <div className={"spa-card"}>
                  <h2>{item.heading}</h2>
                  <img className="img-fluid" src={item.img} alt />
                  <div className="spa-card-hover">
                    <p>
                      {item.desc}
                    </p>
                    <a
                      href
                      className="btn8"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                     {item.btn}
                    </a>
                  </div>
                </div>
              </div>
            ))}

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

export default Spa;
