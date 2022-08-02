import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";

const promise = loadStripe(
  "pk_test_51LRa7DSCHsQ6xfuxqVSHPhJP1JAtHDdFx7aUvhrOa0kxTo9jTvytEoaI3CiftOJMmsFEvcyCfCFd1Xfrd1G21P0s00jbk6kUcy"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(`The User is`, authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/orders"
              element={[<Header />, <Orders />, <Footer />]}
            />
            <Route
              path="/checkout"
              element={[<Header />, <Checkout />, <Footer />]}
            />
            <Route
              path="/payment"
              element={[
                <Header />,
                <Elements stripe={promise}>
                  <Payment />
                </Elements>,
              ]}
            />
            <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
