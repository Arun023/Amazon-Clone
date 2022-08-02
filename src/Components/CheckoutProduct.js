import React from "react";
import "./css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

const CheckoutProduct = ({ id, title, price, img, rating, hidebtn }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <AnimateSharedLayout>
        <motion.div layout className="checkoutProduct">
          <img src={img} alt="" className="checkoutProduct__image" />
          <motion.div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <small style={{ fontWeight: "bold", fontSize: "16px" }}>₹</small>
              <strong>{price}</strong>
            </p>
            <p className="checkoutProduct__rating">
              {Array(rating)
                .fill("")
                .map(() => (
                  <p>⭐</p>
                ))}
            </p>
            {!hidebtn && (
              <motion.button className="btn" onClick={removeFromBasket}>
                Remove from Basket
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>
    </>
  );
};

export default CheckoutProduct;
