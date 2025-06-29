import React from "react";
import "./style.css";
import Button from "../../common/Button/button";
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"

function MainComp() {
    return (
      <div className="max-sm:text-2xl">
        <div className="left-comp saira-italic  font-extrabold text-7xl px-12 py-15 max-sm:text-4xl">
          <div className="track text-white stroke-blue-800 ">Track Crypto</div>
          <div className="real py-6 ">Real Time </div>
        </div>
        <div className="text-3xl px-12 text-gray-500 -mt-14 max-sm:text-xl">
          Track Crypto Price in Real Time !!!
        </div>
        <div className=" px-11 py-5 flex gap-x-4 max-sm:text-xl justify-start items-center mt-1.5">
          <Button text={"Dashboard"} />
          <Button text={"Share"} className="self" />
        </div>

        <div className=" phone-cont">
          <img src={iphone} className="iphone" />
          <img src={gradient} className="grad" />
        </div>
      </div>
    );
}


export default MainComp;