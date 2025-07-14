import React from "react";
import Header from "../components/common/Header/indexh";
import MainComp from "../components/Dashboard/MainComp";
import { BrowserRouter } from "react-router-dom";

 

function HomePage() {
    return (
        <div className="App" >

            {/* <Header /> */}
            <MainComp/>
            
        </div >
    );
}

export default HomePage;