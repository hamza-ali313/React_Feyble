import Reac, { useEffect, useState, useCallback } from "react";
import "./Cafe.css";
import cafePg from "../../assets/Images/cafe-pg.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../redux/cafeSlice';
import Modal from "../../components/Modal/Modal";

const Cafe = () => {
  const [show, setShow] = useState(false);
  const [showDiv1, setShowDiv1] = useState(true);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [title1, setTitle1] = useState(null);
  const [title2, setTitle2] = useState(null);
  const [title3, setTitle3] = useState(null);
  const [title4, setTitle4] = useState(null);
  const [cat1, setCat1] = useState(null);
  const [cat2, setCat2] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cafe);

  console.log('dataa of api from component', data.length > 0)

  const toggleDiv = () => {
    setShowDiv1(prevState => !prevState);
    window.scrollTo(0, 0);
  };

  const fetchAPI = async () => {
    try {
      await dispatch(fetchData());
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const openModal = (itemId) => {
    setShow(true)
    setSelectedItemId(itemId);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  function wait() {
    if (Object.keys(data).length > 0 && !loading) {
      setData1(data.categories[0].subcategories[0].products);
      setData2(data.categories[0].subcategories[1].products);
      setData3(data.categories[1].subcategories[0].products);
      setData4(data.categories[1].subcategories[1].products);
      setTitle1(data.categories[0].subcategories[0].title)
      setTitle2(data.categories[0].subcategories[1].title)
      setTitle3(data.categories[1].subcategories[0].title)
      setTitle4(data.categories[1].subcategories[1].title)
      setCat1(data.categories[0].title)
      setCat2(data.categories[1].title)
    }
  }
  useEffect(() => {
    wait()
  }, [data])

  console.log('data1', data1)
  console.log("data2", data2)
  console.log("data3", data3)
  console.log("data4", data4)

  // const data1 = [
  //   {
  //     id: 1,
  //     title: "MOCHI",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 2,
  //     title: "MOCHI",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 3,
  //     title: "MOCHI",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 4,
  //     title: "MOCHI",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  // ];

  // const data2 = [
  //   {
  //     id: 1,
  //     title: "Vegatables",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 2,
  //     title: "Cabbage",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 3,
  //     title: "Mushroom",
  //     status: "",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 4,
  //     title: "Broccoli",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 5,
  //     title: "Salmon",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 6,
  //     title: "Chicken",
  //     status: "",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 7,
  //     title: "Bing",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  // ]
  // const data2 = [
  //   {
  //     id: 1,
  //     title: "Vegatables",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 2,
  //     title: "Cabbage",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 3,
  //     title: "Mushroom",
  //     status: "",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 4,
  //     title: "Broccoli",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 5,
  //     title: "Salmon",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 6,
  //     title: "Chicken",
  //     status: "",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 7,
  //     title: "Bing",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  // ]
  // const data2 = [
  //   {
  //     id: 1,
  //     title: "Vegatables",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 2,
  //     title: "Cabbage",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 3,
  //     title: "Mushroom",
  //     status: "",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 4,
  //     title: "Broccoli",
  //     status: "GF, VG",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 5,
  //     title: "Salmon",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  //   {
  //     id: 6,
  //     title: "Chicken",
  //     status: "",
  //     desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
  //   },
  //   {
  //     id: 7,
  //     title: "Bing",
  //     status: "GF, VG",
  //     desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
  //   },
  // ]

  return (
    <>
      <section className="cafe-pg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
                    <div className="cafe-col banner">
                      <div className="cafe-pg1">
                        <a href="javascript:;"
                          onClick={toggleDiv}
                        >
                          <h1>{cat1}</h1>
                        </a>
                        <img src={cafePg} alt />
                        <a href="javascript:;"
                          onClick={toggleDiv}
                        >
                          <h1>{cat2}</h1>
                        </a>
                      </div>
                        <a href="javascript:;" className="btn2">
                          Download PDF
                        </a>
                    </div>
              {
                showDiv1 ? (<div className="food-sec" id="food">
                  <div className="row justify-content-center align-items-center flex-column">
                    <div className="col-12">
                      <div className="cafe-col">
                        <h1> {title1}</h1>
                        {data1.map(item => {
                          return (
                            <div key={item.id} className="with-plus">
                              <button
                                href="javascript:;"
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                // data-bs-target="#exampleModal"
                                onClick={() => openModal(item.id)}
                              >
                                <h2>
                                  {item.title}
                                  <span>{item.status}</span>
                                </h2>
                                <h6>{item.services.length && item.services[0].title}</h6>
                              </button>
                              <i className="fa-solid fa-plus" />
                              {selectedItemId === item.id && (
                              <Modal show={show}
                               close={closeModal} 
                               title={item.title}
                                price={item.price}
                                discount= {item.discount_price}
                                />
                              )} 
                            </div>)
                        })}
                      </div>
                    </div>
                    <div className="div-desh" />
                    <div className="col-12 col-lg-8">
                      <div className="cafe-col">
                        <h1 className="mb-4">{title2}</h1>
                        {data2.map(item => (
                          <a key={item.id} href type="button">
                            <h2>{item.title}
                              <span> {item.status}</span>
                            </h2>
                            <h6>
                              {item.services.length && item.services[0].title}
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
                            {cat2}
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
                          <h1>{title3}</h1>
                          {data3.map(item => (
                            <div className="with-plus" key={item.id}>
                              <a
                                href
                                type="button"
                                className
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <h2>{item.title}
                                  <span> {item.status}</span>
                                </h2>
                                <h6> {item.services.length && item.services[0].title}</h6>
                              </a>
                            </div>
                          ))}
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
                            <h1>{title4}</h1>
                          </a>
                          {data4.map(item => (
                            <div className="with-plus" key={item.id}>
                              <a
                                href
                                type="button"
                                className
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <h2>{item.title}
                                  <span> {item.status}</span>
                                </h2>
                                <h6> {item.services.length && item.services[0].title}</h6>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center drint-btn">
                          <a
                            href="javascript:;"
                            className="btn2"
                            onClick={toggleDiv}
                          >
                            {cat1}
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
