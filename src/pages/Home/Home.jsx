import React, { useCallback, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";

import landinglogo from "../../assets/Images/landing-logo.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import Todos from "./Todos.jsx";
// import landinglogo from '../../assets/Images/landing-logo.png'
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./home.css";

function Home() {
  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState([]);


  const addTodo = useCallback(()=>{
    setTodos((prev)=>[...prev, "newtodo"]);
},[todos])


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
                  <Dropdown.Toggle id="dropdown-basic">
                    <CiMenuFries />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="p-0">
                      <Link to="about">About Us</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="comunity">Community</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="member">Members</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="merch">Merch</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="host_event">Host Event</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="site_map">Site Map</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-0">
                      <Link to="contact">Contact</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="landing-main">
                <div>
                  <img src={landinglogo} alt="Landing Logo" />
                </div>
                <ul>
                  <li>
                    <Link  to={"/cafe"}>
                      Cafe
                    </Link>
                  </li>
                  <li>
                    <Link to={"/studio"}>Studio</Link>
                  </li>
                  <li>
                    <Link to={"/spa"}>Spa</Link>
                  </li>
                </ul>
                <div>
                  <a href="members.php" className="btn1">
                    Join The Club
                  </a>
                </div>
              </div>
              <Todos todos={todos} addtodo={addTodo}/>
              <p>{count}</p>
              <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
