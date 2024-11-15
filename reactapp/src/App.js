// import React ,{useState}from "react";
import "./index.css";
function App() {
  const myBox = document.getElementById(`myBox`);
  const myButton = document.getElementById(`myButton`);
  myBox.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Nice tits😉";
  });
  myBox.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "salmon";
    event.target.textContent = "HUH?! WHAT?!";
  });
  myButton.addEventListener("click", function (event) {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Date peh chaloge?";
  });
  myBox.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "cornflowerblue";
    event.target.textContent = "Nice ass too😗";
  });
  myButton.addEventListener("click", (event) => {
    event.target.textContent = "<3";
  });
}
export default App;
