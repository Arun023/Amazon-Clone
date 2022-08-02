import React, { useState } from "react";
import "./css/Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheBATMAN/3000x1200_Hero-Tall-NP._CB630417633_.jpg"
          alt=""
        />
        {/* <div className="home__image"></div> */}
        <div className="home__row">
          <Product
            id="233456454456"
            title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
            price="500"
            img="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            rating={4}
          />
          <Product
            id="2454654654"
            title="Women's 3-in-1 Snowboard Winter Coats"
            price="599"
            img="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            rating={3}
          />
          <Product
            id="545545456"
            title="Opna Women's Short Sleeve Moisture"
            price="939"
            rating={5}
            img="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price="5999.99"
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price="6000"
            rating={5}
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver (4th Generation)"
            price="25040.99"
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="245797254"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
            price="10999.99"
            img="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="24574789"
            title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
            price="15599"
            img="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <Product
//             title="Women's 3-in-1 Snowboard Winter Coats"
//             price="56.99"
//             img="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
//             rating={3}
//           />
//           <Product
//             title="Opna Women's Short Sleeve Moisture"
//             price="8"
//             img="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
//             rating={5}
//           />
//           <Product
//             title="DANVOUY Womens T Shirt Casual Cotton Short"
//             price="13"
//             img="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
//             rating={4}
//           />
