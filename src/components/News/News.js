import axios from "axios";
// import '../App.css';
import '../News/news.css';
import NewsObject from "../News/NewsObject";
import { useEffect, useState } from "react";



function News() {
    const [news, setNews] = useState([]);
    // const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://min-api.cryptocompare.com/data/v2/news/?categories=cryptocurrency,blockchain,btc&excludeCategories=Sponsored&sortOrder=popular&api_key=7e847e13c9abb373e59fa22170e42dc736c09c7644a7f3fdae31efc4d4ad788f"
                //try your own API key from (https://min-api.cryptocompare.com).
            )
            .then((res) => {
                setNews(res.data.Data);
                // console.log(res.data.Data); 
            })
            .catch((error) => console.log(error));
    }, []);

    // const handleChange = (e) => {
    //   setSearch(e.target.value);
    // };

    
    // const filteredCoins = coins.filter((coin) =>
    //   coin.name.toLowerCase().includes(search.toLowerCase())
    // );

    return (
        <div>
            {/* <div className="header"> */}
                {/* <form>
            <input
              className="inputField"
              type="text"
              onChange={handleChange}
              placeholder="Search..."
            />
          </form> */}
            {/* </div> */}
            <div className="coinsContainer">
            {news.map((news)=> {
                    return (
                        <NewsObject
                            title={news.title}
                            imageurl={news.imageurl}
                            url={news.url}
                            // published_on={news.published_on}
                            tags={news.tags}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default News;
