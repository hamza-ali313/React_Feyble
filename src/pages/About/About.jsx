import React from 'react';
import './About.css'
import community1 from '../../assets/Images/comunity-ob1.svg'

const About = () => {
    return (
        <>
            <div>
                <div className="menu_">
                    <div className="container">
                        <section className="our_story_sec py-50">
                            <div className="row">
                                <div className="col-12">
                                    <div className="our_story">
                                        <h1>Our Story</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="our_story2 py-50">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-5">
                                                <div className="os2_img">
                                                    <img src={community1} className="img-fluid" alt="White image" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="right_p">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation
                                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    </p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                        exercitation
                                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 pt-50">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="our_belief pb-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>Our Beliefs</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                        <div className="row justify-content-center my-5">
                                            <div className="col-11 col-md-10">
                                                <div className="ob-item-images">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3  col-xl-3">
                                                            <div className="ob-item-pad os2_img">
                                                                <img src={community1} alt="Community image" className="img-fluid ob_img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3  col-xl-3">
                                                            <div className="ob-item-pad os2_img">
                                                                <img src={community1} alt="Community image" className="img-fluid ob_img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3  col-xl-3">
                                                            <div className="ob-item-pad os2_img">
                                                                <img src={community1} alt="Community image" className="img-fluid ob_img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3  col-xl-3">
                                                            <div className="ob-item-pad os2_img">
                                                                <img src={community1} alt="Community image" className="img-fluid ob_img" />
                                                            </div>
                                                        </div>
                                                        {/* Repeat the above div block for other images */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="our_why pb-50">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-7">
                                    <div className="left_p">
                                        <h2>Our Why</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5">
                                    <div className="os2_img">
                                        {/* Add the actual image source */}
                                        <img src={community1} className="img-fluid" alt="Your image alt text" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
