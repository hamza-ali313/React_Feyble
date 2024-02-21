import React from "react";
import disc3 from "../../assets/Images/discount3.png";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Become_A_Resi.css";

const BecomeResi = () => {
  return (
    <>
      <section className="get-discounts">
        <div className="container p-0">
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
                      <HiArrowLongRight />
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

export default BecomeResi;
