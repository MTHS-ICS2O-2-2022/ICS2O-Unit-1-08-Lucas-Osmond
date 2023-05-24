// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js", {
    scope: "/ICS2O-Unit-1-08-Lucas-Osmond/",
  })
}

function myButtonClicked() {
  alert("hello, world!")
}
