import React, { useState } from 'react';
import './Merchandise.css';
import merchand1 from '../../assets/Images/merchand1.png'

const Merchandise = () => {
    const [tab, setTab] = useState({
        shirts: true,
        pants: false,
        skirts: false,
        misc: false,
    })

    const setActiveTab = (selectedTab) => {
        const newTabState = {
            shirts: false,
            pants: false,
            skirts: false,
            misc: false,
        };
        newTabState[selectedTab] = true;
        setTab(newTabState);
    };

    const data = [
        {
            id: 1,
            img: merchand1,
            heading: "Plain Shirt",
            price: "$25.",
            deno: "00"
        },
        {
            id: 1,
            img: merchand1,
            heading: "Plain Shirt",
            price: "$25.",
            deno: "00"
        },
        {
            id: 1,
            img: merchand1,
            heading: "Plain Shirt",
            price: "$25.",
            deno: "00"
        }
    ]

    return (
        <>

            <section className="merchandise-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <h1>merchandise</h1>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marchandise-pg">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 col-lg-3 pe-5">
                            <ul>
                                <li>
                                    <a href="javascript:;" onClick={() => setActiveTab("shirts")}>Shirts</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={() => setActiveTab("pants")}>Pants</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={() => setActiveTab("skirts")}>Skirts</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={() => setActiveTab("misc")}>MISC</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-9">
                            {tab.shirts && (
                                <div className="merchandise-prods shirts">
                                    <div className="row">
                                        <h1>Shirts</h1>
                                        {data.map(item => (
                                            <div key={item.id} className="col-12 col-lg-4 mb-5">
                                                <div className="merchandise-box">
                                                    <img src={item.img} />
                                                    <h2>{item.heading}</h2>
                                                    <h2>${item.price}
                                                        <span>{item.deno}</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {tab.pants && (
                                <div className="merchandise-prods pants">
                                    <div className="row">
                                        <h1>Pants</h1>
                                        {data.map(item => (
                                            <div key={item.id} className="col-12 col-lg-4 mb-5">
                                                <div className="merchandise-box">
                                                    <img src={item.img} />
                                                    <h2>{item.heading}</h2>
                                                    <h2>${item.price}
                                                        <span>{item.deno}</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {tab.skirts && (
                                <div className="merchandise-prods skirts">
                                    <div className="row">
                                        <h1>skirts</h1>
                                        {data.map(item => (
                                            <div key={item.id} className="col-12 col-lg-4 mb-5">
                                                <div className="merchandise-box">
                                                    <img src={item.img} />
                                                    <h2>{item.heading}</h2>
                                                    <h2>${item.price}
                                                        <span>{item.deno}</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {tab.misc && (
                                <div className="merchandise-prods misc">
                                    <div className="row">
                                    <h1>Misc</h1>
                                        {data.map(item => (
                                            <div key={item.id} className="col-12 col-lg-4 mb-5">
                                                <div className="merchandise-box">
                                                    <img src={item.img} />
                                                    <h2>{item.heading}</h2>
                                                    <h2>${item.price}
                                                        <span>{item.deno}</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Merchandise;
