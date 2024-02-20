import React from "react";
import { FaUser } from "react-icons/fa6";
import landinglogo from '../../assets/landing-logo.png'
import { Container, Row, Col,Dropdown } from "react-bootstrap";
import './home.css'
function Home() {
  return (
    <div>
      <section className="landing-pg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="landing-header-sec">
                <a href="#" className="btn1" data-bs-toggle="modal" data-bs-target="#signModal">
                  Sign In
                </a>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Community</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Members</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Merch</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Host Event</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Site Map</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
           
              </div>
              <div className="landing-main">
                <div>
                  <img src={landinglogo} alt="Landing Logo" />
                </div>
                <ul>
                  <li>
                    <a href="cafe.php">Cafe</a>
                  </li>
                  <li>
                    <a href="studio.php">Studio</a>
                  </li>
                  <li>
                    <a href="spa.php">Spa</a>
                  </li>
                </ul>
                <div>
                  <a href="members.php" className="btn8">Join The Club</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
