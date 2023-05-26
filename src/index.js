//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var time = "";
var color = {};

let today = new Date();
let hours = today.getHours();
if (hours >= 12 && hours < 18) {
  time = "Afternoon";
  color = {
    color: "green"
  };
} else if (hours >= 18 && hours <= 23) {
  time = "Evening";
  color = {
    color: "blue"
  };
} else {
  time = "morning";
  color = {
    color: "red"
  };
}

ReactDOM.render(
  <h1 className="heading" style={color}>
    Good {time}
  </h1>,
  document.getElementById("root")
);
