import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" id="gift" />
              <label htmlFor="gift"> This order contains a gift</label>
            </small>
          </>
        )}
      />
      <button
        className="btn"
        onClick={(e) =>
          user ? navigate("/payment") : navigate("/login")
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;

// renderText={(value) => (
//   <>
//     <p>
//       Subtotal (0 items): <strong>0</strong>
//     </p>
//     <small className="subtotal__gift">
//       <input type="checkbox" /> This order contains a gift
//     </small>
//   </>
// )}
// decimalScale={2}
// value={0}
// displayType={"Text"}
// thousandSeparator={true}
// prefix={"$"}
