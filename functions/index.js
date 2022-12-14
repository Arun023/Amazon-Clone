/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LRa7DSCHsQ6xfux04cCXriughad78FvJK9AmWQfmMyl2Oo2p3r6YGEzpjejyeKLacTcJIgxhDOiNZoJwi8IyrPa00SGlw27M0"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/fir-5d228/us-central1/api

// sk_test_51LRa7DSCHsQ6xfux04cCXriughad78FvJK9AmWQfmMyl2Oo2p3r6YGEzpjejyeKLacTcJIgxhDOiNZoJwi8IyrPa00SGlw27M0
