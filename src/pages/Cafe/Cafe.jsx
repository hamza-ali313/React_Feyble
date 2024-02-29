import Reac, { useEffect, useState } from "react";
import "./Cafe.css";
import cafePg from "../../assets/Images/cafe-pg.svg";
const Cafe = () => {
  // will unamount
  // useEffect(() => {
  //   return () => alert("hello world");
  //   // console.log('hello world')
  // }, []);

  // did mount
  // useEffect(() => {
  //   return () => alert("hello world");
  //   console.log("hello world");
  // }, []);

  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      alert("hello world");
    }
    // console.log("hello world");
  }, [click]);


  const data1 = [
    {
      id:1,
      heading: "MOCHI",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:2,
      heading: "MOCHI",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:3,
      heading: "MOCHI",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:4,
      heading: "MOCHI",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
  ];

  const data3 = [
    {
      id:1,
      heading: "Mother & The Wolf",
      head: "GF, VG",
      desc: "CHICKEN CONGEE, EGG, RADISH, FRIED SHALLOTS, GREEN ONIONS, XO SAUCE, PORK FLOSS, WHITE PEPPER, YOUTIAO",
    },
    {
      id:2,
      heading: "Owl & The Grasshopper",
      head: "GF",
      desc: "CHICKEN CONGEE, EGG, RADISH, FRIED SHALLOTS, GREEN ONIONS, XO SAUCE, PORK FLOSS, WHITE PEPPER, YOUTIAO",
    },
    {
      id:3,
      heading: "North Wind & The Sun",
      head: "GF, VG",
      desc: "CHICKEN CONGEE, EGG, RADISH, FRIED SHALLOTS, GREEN ONIONS, XO SAUCE, PORK FLOSS, WHITE PEPPER, YOUTIAO",
    },
    {
      id:4,
      heading: "The Goose & The Golden Egg",
      head: "GF",
      desc: "CHICKEN CONGEE, EGG, RADISH, FRIED SHALLOTS, GREEN ONIONS, XO SAUCE, PORK FLOSS, WHITE PEPPER, YOUTIAO",
    },
  ];

  const data2 = [
    {
      id:1,
      heading: "Vegatables",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:2,
      heading: "Cabbage",
      head: "GF, VG",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id:3,
      heading: "Mushroom",
      head: "",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:4,
      heading: "Broccoli",
      head: "GF, VG",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id:5,
      heading: "Salmon",
      head: "GF, VG",
      desc: "MUFFIN PASTRY, WITH SEASONAL FRUIT",
    },
    {
      id:6,
      heading: "Chicken",
      head: "",
      desc: "TOMATO, EGG, CHILI OIL, SCALLION BING",
    },
    {
      id:7,
      heading: "Bing",
      head: "GF, VG",
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
                        <a href="javascript:;" onclick="foodShow()">
                          <h1>FOOD</h1>
                        </a>
                        <img src={cafePg} alt />
                        <a href="javascript:;" onclick="drinkShow()">
                          <h1>DRINKS</h1>
                        </a>
                      </div>
                      <div>
                        <a
                          onClick={() => {
                            setClick(true);
                          }}
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
              <div className="food-sec" id="food">
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
                              {item.heading}
                              <span>{item.head}</span>
                            </h2>
                            <h6>{item.desc}</h6>
                          </a>
                          <i className="fa-solid fa-plus" />
                        </div>
                      ))}

                    </div>
                  </div>
                  <div className="div-desh" />
                  <div className="col-12">
                    <div className="cafe-col">
                      {data2.map(item => (
                        <a key={item.id} href type="button">
                          <h2>
                            {item.heading}
                            <span> {item.head}</span>
                          </h2>
                          <h6>  {item.desc}</h6>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="cafe-col">
                      <h1 className="mb-4">CONGEE</h1>
                      {data3.map(item => (
                        <a key={item.id} href type="button">
                          <h2>{item.heading}
                            <span> {item.head}</span>
                          </h2>
                          <h6>
                            {item.desc}
                          </h6>
                        </a>
                      ))}
                    </div>
                    <div className="col-12">
                      <div className="text-center drint-btn">
                        <a
                          href="javascript:;"
                          onclick="drinkShow()"
                          className="btn2"
                        >
                          Drink
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="drinks-sec"
                id="drinks"
                style={{ display: "none" }}
              >
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
                      <div className="with-plus">
                        <a
                          href
                          type="button"
                          className
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <h2>Black Tea</h2>
                          <h6>Focusing Oolong Tea</h6>
                        </a>
                      </div>
                      <a
                        href
                        type="button"
                        className
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <h2>PU`ER</h2>
                        <h6>Detoxing PU`ER</h6>
                      </a>
                      <a
                        href
                        type="button"
                        className
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <h2>Chrysanthemum</h2>
                        <h6>Detoxing PU`ER</h6>
                      </a>
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
                        <h2>Macha Based</h2>
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
                        onclick="foodShow()"
                        className="btn2"
                      >
                        Food
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cafe;
