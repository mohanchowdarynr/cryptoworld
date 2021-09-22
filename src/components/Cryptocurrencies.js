import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Resources/cryptoApi';

const Cryptocurrencies = ({Simplified}) => {
    const count = Simplified ? 10 : 100;
    const {data : cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
        setCryptos(cryptoList?.data?.coins);
        const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(search));
        setCryptos(filteredData);
      }, [cryptoList, search])

    if(isFetching){
        return <h1>Loading</h1>
    }

    return (
        <Wrapper>
          {
              !Simplified && (
                  <div className="input">
                      <input type="text" value={search} placeholder="search currency" onChange={(e) => setSearch(e.target.value)} />
                  </div>
              )
          }
          
           {
              cryptos && cryptos.map((currency) => {
                   return <div className="card" key={currency.id}>
                   <Link key={currency.id} className="link" to={`/crypto/${currency.id}`}>
                   <div className="cardHeader">
                     <h3>{`${currency.rank}. ${currency.name}`}</h3>
                     <img  alt="crypto" src={currency.iconUrl} />
                   </div>
                   <div className="cardContent">
                   <p>Price: {millify(currency.price)}</p>
                   <p>Market Cap: {millify(currency.marketCap)}</p>
                   <p>Daily Change: {currency.change}%</p>
                   </div>
                   </Link>
                   </div>
               })
           }
          
        </Wrapper>
    )
}
const Wrapper = styled.div`
display:flex;
width: 100%;
flex-wrap:wrap;
box-sizing: border-box;
margin: 10px auto;
.input{
    display: flex;
    width: 100%;
    align-items:center;
    input {
    width: 200px;
    height: 30px;
    border: none;
    outline: none;
    padding: 5px 10px;
      margin: 40px auto;
      ::placeholder{
          text-align: center;
          font-weight: 700;
          font-size: 16px;
      }
    }
}
.card {
    width:220px;
    height:200px;
    margin-left: 10px;
    margin-right:30px;
    margin-bottom: 20px;
    background-color: white;
    font-weight: 500;
}
.cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin:20px;
    img{
        height:30px;
    }
}
.cardContent{
    margin: 20px;
    p {
        margin: 10px 0;
    }
}

`

export default Cryptocurrencies
