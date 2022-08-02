import React from "react";
import "./css/Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout__ad"
        />
        <div>
          <h2>Hey, {user ? user.email : "Guest"}</h2>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket?.map((item) => {
            return (
              <>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
