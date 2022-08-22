import axios from "axios";
import '../App.css';
import './Prices.css';
import Coin from './Coin';
import { useEffect, useState } from "react";



function Prices() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setCoins(res.data);
        //   console.log(res.data); 
        })
        .catch((error) => console.log(error));
    }, []); 
  
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
        <div className="header">
          <form>
            <input
              className="inputField"
              type="text"
              onChange={handleChange}
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="coinsContainer">
        {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Prices;
