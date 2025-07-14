import React from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
function List({ coin }) {
    return (
      <tr className="list-row">
        <td>
          <div className="info-flex">
            <img src={coin.image} className="coin-logo" />
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
          {coin.price_change_percentage_24h >= 0 ? (
            <div className="chip-flex">
              <div className="price-chip price-green ">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip price-red price-chip chip-green">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="chip-flex">
              <div className="price-chip price-red red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip red chip-red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
          <div className="px-8 h- w-0.">
            {coin.price_change_percentage_24h >= 0 ? (
              <div className="current-price text-green-600 font-semibold text-base">
                ${coin.current_price.toLocaleString()}
              </div>
            ) : (
              <div className="current-price-red text-red-700 font-semibold text-base">
                ${coin.current_price.toLocaleString()}
              </div>
            )}
            <div className="coin-name">
              Total Volume : {coin.total_volume.toLocaleString()}
            </div>
            <div className="coin-name">
              Market Capital : ${coin.market_cap.toLocaleString()}
            </div>
          </div>
        </td>
      </tr>
    );  
}

export default List;