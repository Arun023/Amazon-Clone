import React, { useEffect, useState } from "react";
import "./css/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "./Payment/axios";
import { db } from "../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("SECRET", clientSecret);
  //   console.log("🤣", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__header">
          <h1>
            <p>Hey, {user ? user.email : "Guest"}</p>
          </h1>
          <h2>Checkout ({basket?.length} items)</h2>
          <button className="btn">
            <Link to="/checkout" className="payment__checkoutLink">
              Checkout
            </Link>
          </button>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>123 React Lane</p>
            <p>Jodhpur , India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment__details">
            <CardElement onChange={handleChange} />
            <form action="" onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className="btn"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
