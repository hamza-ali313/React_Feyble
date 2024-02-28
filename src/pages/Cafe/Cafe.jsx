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
                      <div className="with-plus">
                        <a
                          href
                          type="button"
                          className
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <h2>
                            MOCHI
                            <span>GF, VG</span>
                          </h2>
                          <h6>Muffin Pastry, with Seasonal Fruit</h6>
                        </a>
                        <i className="fa-solid fa-plus" />
                      </div>
                      <div className="with-plus">
                        <a href type="button">
                          <h2>
                            LOAF
                            <span>GF</span>
                          </h2>
                          <h6>Muffin Pastry, with Seasonal Fruit</h6>
                        </a>
                        <i className="fa-solid fa-plus" />
                      </div>
                      <a href type="button">
                        <h2>
                          PARFAIT
                          <span>GF, VG</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                      <a href type="button">
                        <h2>
                          TOAST
                          <span>VG</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                    </div>
                  </div>
                  <div className="div-desh" />
                  <div className="col-12">
                    <div className="cafe-col">
                      <a href type="button">
                        <h2>
                          Vegatables
                          <span>V</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                      <a href type="button">
                        <h2>
                          Cabbage
                          <span>GF, V</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                      <a href type="button">
                        <h2>
                          Mushroom
                          <span>GF, VG</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                      <a href type="button">
                        <h2>
                          Broccoli
                          <span>GF, V</span>
                        </h2>
                        <h6>Muffin Pastry, with Seasonal Fruit</h6>
                      </a>
                      <a href type="button">
                        <h2>Salmon</h2>
                        <h6>Tomato, Egg, Chili Oil, Scallion Bing</h6>
                      </a>
                      <a href type="button">
                        <h2>Chicken</h2>
                        <h6>Tomato, Egg, Chili Oil, Scallion Bing</h6>
                      </a>
                      <a href type="button">
                        <h2>Bing</h2>
                        <h6>Tomato, Egg, Chili Oil, Scallion Bing</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="cafe-col">
                      <h1 className="mb-4">CONGEE</h1>
                      <a href type="button">
                        <h2>Mother &amp; The Wolf</h2>
                        <h6>
                          Chicken Congee, Egg, Radish, Fried Shallots, Green
                          Onions, XO Sauce, Pork Floss, White Pepper, Youtiao
                        </h6>
                      </a>
                      <a href type="button">
                        <h2>
                          Owl &amp; The Grasshopper
                          <span>GF, VG</span>
                        </h2>
                        <h6>
                          Chicken Congee, Egg, Radish, Fried Shallots, Green
                          Onions, XO Sauce, Pork Floss, White Pepper, Youtiao
                        </h6>
                      </a>
                      <a href type="button">
                        <h2>
                          North Wind &amp; The Sun
                          <span>GF</span>
                        </h2>
                        <h6>
                          Chicken Congee, Egg, Radish, Fried Shallots, Green
                          Onions, XO Sauce, Pork Floss, White Pepper, Youtiao
                        </h6>
                      </a>
                      <a href type="button">
                        <h2>
                          The Goose &amp; The Golden Egg
                          <span>GF</span>
                        </h2>
                        <h6>
                          Chicken Congee, Egg, Radish, Fried Shallots, Green
                          Onions, XO Sauce, Pork Floss, White Pepper, Youtiao
                        </h6>
                      </a>
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
