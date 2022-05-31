import React from "react";
import ReactDOM from "react-dom";

function Tester() {
  // console.log("hello");
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  console.log(fruits.get("apples"))
  

  
}

Tester();

export default Tester;
