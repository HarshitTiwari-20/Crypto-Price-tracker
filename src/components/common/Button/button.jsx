import React from "react";
import "./index.css";

function Button({ text, onClick, outlined }) {
  return (
    <>
      {/* maked my own transition*/}
      <div
        className= {outlined ? "outline-btn" : "btn"}
        onClick={() => onClick()}
      >
        {text}
      </div>
    </>
  );
}

export default Button;
