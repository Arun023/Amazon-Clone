import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, img, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket cart>>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small style={{ fontWeight: "bold", fontSize: "16px" }}>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill("")
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product__img" />
      <button
        className="btn"
        onClick={() => {
          addToBasket();
        }}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
