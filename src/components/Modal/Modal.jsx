import React from 'react'
import thrap1 from "../../assets/Images/thrap1.png"
import thrap2 from "../../assets/Images/thrap2.png"
import thrap3 from "../../assets/Images/thrap3.png"
import thrap4 from "../../assets/Images/thrap4.png"
import thrap5 from "../../assets/Images/thrap5.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'

const ModalTest = ({ close, show, title, price ,discount}) => {
    return (
        <Modal show={show} onHide={close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <div class="modal-body">
                <div class="row align-items-start">
                    <div class="col-12 col-lg-5">
                        <div class="modal-img">
                            <img src={thrap1} alt="" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-7">
                        <div class="modal-desc">
                            <h1>{title}</h1>
                            <ul class="ratings-sec">
                                <li class="ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <span>4.0</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-message"></i>
                                    <p> 4 Reviews</p>
                                </li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid quia eaque
                                reiciendis impedit eum omnis nostrum rem placeat, enim ipsum ex, sit unde. Quibusdam
                                maiores iure ipsum itaque ut.
                            </p>
                            <ul class="modal-price">
                                <li>
                                    <h1>
                                        ${price}
                                    </h1>
                                </li>
                                <li>
                                    <h2>
                                       ${discount}
                                    </h2>
                                </li>
                                <li>
                                    <h3>
                                        2%
                                    </h3>
                                </li>
                            </ul>
                            <a href="#" class="btn5" data-bs-toggle="modal" data-bs-target="#book_now">book now</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div class="more-imgs">
                            <ul>
                                <li>
                                    <img src={thrap2} alt="" />
                                </li>
                                <li>
                                    <img src={thrap3} alt="" />
                                </li>
                                <li>
                                    <img src={thrap4} alt="" />
                                </li>
                                <li>
                                    <img src={thrap5} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalTest