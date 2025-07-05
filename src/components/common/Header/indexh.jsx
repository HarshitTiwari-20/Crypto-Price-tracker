import React from "react";
import "./../../../App.css";
import AnchorTemporaryDrawer from "./drawer.jsx";
import Button from "../Button/button.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex text-4xl font-extrabold justify-between items-center py-6 px-10 sticky top-0 left-0 bg-black  ">
      <div className="logo text-4xl saira-italic font-semibold max-sm:text-2xl">
        <Link to="/"> Crypto Tracker </Link>
        {/*<span className="bg-blue-600">.</span>*/}
      </div>
      <div className="link flex content-end items-center gap-5 text-xl font-medium max-sm:hidden">
        <Link
          to="/"
          className="text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 p-3"
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className="text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 p-2"
        >
          Watchlist
        </Link>
        <Link
          to="/compare"
          className="text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg border-2 border-transparent transition-all duration-300 py-4 px-4">
          Compare
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={() => console.log("hiiii")} />
        </Link>
      </div>
      <div className="sm:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;