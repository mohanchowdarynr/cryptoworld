import React from 'react'
import styled from 'styled-components'
import { useGetCryptosQuery } from '../Resources/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';
import millify from 'millify';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);

    const stats = data?.data?.stats

    if(isFetching){
        return <h1>Loading</h1>
    }

    return (
        <Wrapper>
            <div className="stats">
            <h1>Global Crypto Stats</h1>
            <div className="cryptoDetails">
               <div className="statDetails"><p>Total Crypto</p><h3>{stats.total}</h3></div>
               <div className="statDetails"><p>Total Exchanges</p><h3>{millify(stats.totalExchanges)}</h3></div>
               <div className="statDetails"><p>Total Market Cap:</p><h3>{millify(stats.totalMarketCap)}</h3></div>
               <div className="statDetails"><p>Total 24h Volume</p><h3>{millify(stats.total24hVolume)}</h3></div>
               <div className="statDetails"><p>Total Markets</p><h3>{millify(stats.totalMarkets)}</h3></div>  
            </div>
            <div className="cryptoList">
            <h1>Top 10 Cryptos In The World</h1>
            <Link className="link" to='/currencies'><h2>Show all</h2></Link>
            </div>
            <Cryptocurrencies Simplified/>
            
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
display: flex;
flex-direction: column;
color:black;
width: 100%;
/* height: 100vh; */
padding: 20px;
h1{
    font-size: 30px;
}
.cryptoDetails{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.statDetails{
    width: 45%;
    margin:20px 0;
    p {
        color: grey;
        letter-spacing: 2px;
        margin: 5px 0;
    }
    h3 {
        padding: 5px 0;
    }
}
.cryptoList {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
`
export default Home
