// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListCoins from './ListCoins';

const TableComponent = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const getData = async() =>{
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setCoins(res.data)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
        <input type="text" placeholder="Buscar moneda" className="form-control mt-4 bg-light text-center text-light" onChange={e => setSearch(e.target.value)}/>
        </div>
        <ListCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default TableComponent;