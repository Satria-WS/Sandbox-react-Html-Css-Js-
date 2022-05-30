import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <a href="https://www.w3schools.com/" target="_parent">
        Visit _parent!
      </a>
      <br />
      <a href="https://www.w3schools.com/" target="_top">
        Visit _self!
      </a>
      <p>
        <a
          style={{ backgroundColor: "transparent" }}
          href="https://www.google.co.id"
        >
          Google
        </a>
      </p>

      <p>Hello World p</p>
      <div>Hello World div</div>
      <spa>Hello World span</spa>
      <br />
      <a>test inline elemnt</a>

      <address>
        Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
        Visit us at:
        <br />
        dfasdasdasd <br />
        Box 564, Disneyland
        <br />
      </address>

      <code style={{display:"block"}}>code1</code>
      <code>code1</code>
    </>
  );
}

export default App;
