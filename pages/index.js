import Layout from "../Components/Layout";
import CoinList from "../Components/CoinList";
import SearchBr from "../Components/Search";
import { useState } from "react";

export default function Home({ fileredCoins }) {
  const [search , setSearch] = useState([])

  const allCoins = fileredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toString().toLowerCase())
    )
    const handleChange = e =>{
      e.preventDefault()
      setSearch(e.target.value.toLowerCase())
    }
  return (
    <Layout>
      <div className="coin_app">
        <SearchBr type="test" placeholder="Search" onChange={handleChange} />
        <CoinList fileredCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000000000&page=1&sparkline=false"
  );

  const fileredCoins = await res.json();

  return {
    props: {
      fileredCoins,
    },
  };
};
