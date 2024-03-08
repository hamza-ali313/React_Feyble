import Reac, { useEffect, useState, useCallback } from "react";
import "./Cafe.css";
import cafePg from "../../assets/Images/cafe-pg.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../redux/cafeSlice';

const Cafe = () => {
  const [click, setClick] = useState(false);
  const [showDiv1, setShowDiv1] = useState(true);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cafe);


  const toggleDiv = () => {
    setShowDiv1(prevState => !prevState);
    window.scrollTo(0, 0);
  };


  const fetchAPI = useCallback(() => {
    dispatch(fetchDataStart());
    dispatch(fetchData())
      .then((response) => {
        dispatch(fetchDataSuccess(response.payload));
      })
      .catch((err) => {
        dispatch(fetchDataFailure(err.message));
      });
  }, [dispatch]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  // const foods = data.categories[0].subcategories[1].products;
  // console.log(foods);

  // const data1 = data.categories[0].subcategories[0].products;
  // const data2 = data.categories[0].subcategories[1].products;

  const data1 = [
    {
      id: 1,
      title: "MOCHI",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 2,
      title: "MOCHI",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 3,
      title: "MOCHI",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 4,
      title: "MOCHI",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
  ];
  const data2 = [
    {
      id: 1,
      title: "Vegatables",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 2,
      title: "Cabbage",
      status: "GF, VG",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id: 3,
      title: "Mushroom",
      status: "",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 4,
      title: "Broccoli",
      status: "GF, VG",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id: 5,
      title: "Salmon",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id: 6,
      title: "Chicken",
      status: "",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id: 7,
      title: "Bing",
      status: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
  ]
  return (
    <>
      <section className="cafe-pg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="cafe-branch">
                <div className="row justify-content-center align-items-center flex-column">
                  <div className="col-12 col-lg-12">
                    <div className="cafe-col banner">
                      <div className="cafe-pg1">
                        <a href="javascript:;"
                          onClick={toggleDiv}
                        >
                          <h1>FOOD</h1>
                        </a>
                        <img src={cafePg} alt />
                        <a href="javascript:;"
                          onClick={toggleDiv}
                        >
                          <h1>DRINKS</h1>
                        </a>
                      </div>
                      <div>
                        <a
                          href="javascript:;"
                          className="btn2"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {
                showDiv1 ? (<div className="food-sec" id="food">
                  <div className="row justify-content-center align-items-center flex-column">
                    <div className="col-12">
                      <div className="cafe-col">
                        <h1>yum cha</h1>
                        {data1.map(item => (
                          <div key={item.id} className="with-plus">
                            <a
                              href="#"
                              type="button"
                              className="btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <h2>
                                {item.title}
                                <span>{item.status}</span>
                              </h2>
                              {/* <h6>{item.services[0].title}</h6> */}
                            </a>
                            <i className="fa-solid fa-plus" />
                          </div>
                        ))}

                      </div>
                    </div>
                    <div className="div-desh" />
                    <div className="col-12 col-lg-8">
                      <div className="cafe-col">
                        <h1 className="mb-4">CONGEE</h1>
                        {data2.map(item => (
                          <a key={item.id} href type="button">
                            <h2>{item.title}
                              <span> {item.status}</span>
                            </h2>
                            <h6>
                              {/* {item.services[0].title} */}
                            </h6>
                          </a>
                        ))}
                      </div>
                      <div className="col-12">
                        <div className="text-center drint-btn">
                          <a
                            href="javascript:;"
                            className="btn2"
                            onClick={toggleDiv}
                          >
                            Drink
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>) : (
                  <div className="drinks-sec" id="drinks" >
                    <div className="row justify-content-center align-items-center flex-column">
                      <div className="col-12 col-lg-6">
                        <div className="cafe-col">
                          <h1>LOOSE LEAF</h1>
                          <div className="with-plus">
                            <a
                              href
                              type="button"
                              className
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <h2>Green Tea</h2>
                              <h6>Origins</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="div-desh" />
                      <div className="col-12 col-lg-5">
                        <div className="cafe-col">
                          <a
                            href
                            type="button"
                            className
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <h1>LATTES</h1>
                          </a>
                          <a
                            href
                            type="button"
                            className
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <h2>Coffee Based</h2>
                          </a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center drint-btn">
                          <a
                            href="javascript:;"
                            className="btn2"
                            onClick={toggleDiv}
                          >
                            Food
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cafe;
