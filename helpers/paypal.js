const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcWX5-ONE6XpD4dEQrndyavJXX7KsH4XcqUDSdZHjBPhBCB1NMRjwrimkqHZs7ymExuWp3wgUQxdoUrz",
  client_secret: "EOkAVH7FwTJTKNf0KV4Uz_JQ4hsS0DKuy5fLQk7CZtgswQjcqbWEZ2jgJHUJOxV-myGrQOHIIrWrQzu0",
});

module.exports = paypal;
