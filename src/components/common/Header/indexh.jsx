import React from "react";
import "./../../../App.css";
import AnchorTemporaryDrawer from "./drawer.jsx";
import Button from "../Button/button.jsx";

const Header = () => {
  return (
    <div className="flex text-4xl font-extrabold justify-between items-center py-6 px-10 sticky top-0 left-0 bg-black  ">
      <div className="logo text-4xl saira-italic font-semibold max-sm:text-2xl">
        <a href="/"> Crypto Tracker </a>
        {/*<span className="bg-blue-600">.</span>*/}
      </div>
      <div className="link flex content-end items-center gap-5 text-xl font-medium    w-120">
        <span>
          <a href="/">
            {/* mereko ye className=" text-gray-500 hover:text-white" bar bar nhi likhna , avi ke liye lagaya hu baad me update hoga */}
            <span className=" text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 p-3 max-sm:hidden">
              Home
            </span>
          </a>
        </span>
        <span>
          <a href="/">
            <span className=" text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 p-2 max-sm:hidden">
              Watchlist
            </span>
          </a>
        </span>
        <span>
          <a href="/">
            <span className=" text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 py-3 px-2 max-sm:hidden ">
              Market
            </span>
          </a>
          <a href="#">
            
              <Button text={"Dashboard"} onClick={()=> console.log("hiiii")} />
            
          </a>
        </span>
        <div className="sm:hidden">
          <AnchorTemporaryDrawer />
        </div>
      </div>
    </div>
  );
}

export default Header;