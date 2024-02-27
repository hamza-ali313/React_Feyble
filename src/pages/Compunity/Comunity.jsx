import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comu1 from "../../assets/Images/video-play-icon.png";
import comuSli1 from "../../assets/Images/comunity-ob1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Comunity.css";
import { Link } from "react-router-dom";
const Comunity = () => {
  return (
    <>
      <div className="comunity_ menu_">
        <section className="comunity_sec1">
          <div className="container">
            <div className="video-container">
              <img src={comu1} alt="comunity" />
            </div>
          </div>
        </section>
        <section className="our_belief pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </p>
                <div className="row justify-content-center">
                  <div className="col-12 mt-4">
                    <h1>Newsletters</h1>
                    <div className="my-4">
                      <Slider
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={true}
                        className="site_map"
                      >
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart" />
                                <label htmlFor="heart">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #1</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart1" />
                                <label htmlFor="heart1">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #2</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart2" />
                                <label htmlFor="heart2">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #3</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart3" />
                                <label htmlFor="heart3">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #4</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart4" />
                                <label htmlFor="heart4">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #5</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                        <div className="div1">
                          <div className="div1_img">
                            <img src={comuSli1} className="img-fluid ob_img" />
                            <div>
                              <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                              </span>
                              <span className="heart_check">
                                <input type="checkbox" id="heart5" />
                                <label htmlFor="heart5">
                                  <FontAwesomeIcon icon={faHeart} />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="div1_text">
                            <h3>Newsletter #6</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </p>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_belief pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-4">
                <h1>Social Media</h1>
                <div className="my-4">
                  <div className="site_map">
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart" />
                            <label htmlFor="heart">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #1</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart1" />
                            <label htmlFor="heart1">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #2</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart2" />
                            <label htmlFor="heart2">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #3</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart3" />
                            <label htmlFor="heart3">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #4</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart4" />
                            <label htmlFor="heart4">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #5</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart5" />
                            <label htmlFor="heart5">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>SMM Post Title #6</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_belief pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-4">
                <h1>Events</h1>
                <div className="my-4">
                  <div className="site_map">
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart" />
                            <label htmlFor="heart">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #1</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart1" />
                            <label htmlFor="heart1">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #2</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart2" />
                            <label htmlFor="heart2">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #3</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart3" />
                            <label htmlFor="heart3">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #4</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart4" />
                            <label htmlFor="heart4">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #5</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="div1">
                      <div className="div1_img">
                        <img src={comuSli1} className="img-fluid ob_img" />
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faCommentDots} />
                          </span>
                          <span className="heart_check">
                            <input type="checkbox" id="heart5" />
                            <label htmlFor="heart5">
                              <FontAwesomeIcon icon={faHeart} />
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="div1_text">
                        <h3>Event Title #6</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="yellow1-sec">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-11">
                <div className="row">
                  <div className="col-6 mid-Line">
                    <div className="item_yellow1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercit
                      </p>
                      <div>
                        <Link to="members" className="btn8">
                          Join The Club
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item_yellow1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercit
                      </p>
                      <div>
                        <Link to="merch" className="btn8">
                          Merchandise
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comunity;
