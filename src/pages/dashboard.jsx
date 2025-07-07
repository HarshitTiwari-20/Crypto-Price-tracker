import React from "react";
import Header from "../components/common/Header/drawer";
import MainComp from "../components/Dashboard/MainComp";
import { BrowserRouter } from "react-router-dom";
import TabsComp from "../components/Dashboard/Tabs";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//import TabsComp from "../components/Dashboard/Tabs";



function DBpage() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
     
    
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((response) => {
              console.log("RESPONSE>>>", response);
              setCoins(response.data);
          })
          .catch((error) => {
            console.log("Error >>> ", error);
          });
    }, []);

        return (
            <div className="App" >
                <TabsComp coins={coins}/>
            
            </div >
        );
    }

export default DBpage;