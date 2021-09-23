import React from 'react'
import styled from 'styled-components'
import { useGetExchangesQuery } from '../Resources/cryptoApi'
import millify from 'millify';

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;
    console.log(data);

    if(isFetching) return <p>Loading..</p>
    return (
        <Wrapper>
            <div className="exchangeHeader">
            <p>Exchanges</p>
            <p>24h Trade Volume</p>
            <p>Markets</p>
           <p>Change</p>
            </div>
            <div className="exchangeInfo">
             {exchangesList.map((exchange) => {
                 return <div key={exchange.id} className="exchangeDetails">
                 <div className="exchangePlat">
                 <p>{exchange.rank}</p>
                 <img src={exchange.iconUrl} alt="logo" />
                 <h4>{exchange.name}</h4>
                 </div>
                 <p>${millify(exchange.volume)}</p>
                 <p>{millify(exchange.numberOfMarkets)}</p>
                 <p>{millify(exchange.marketShare)}%</p>
                 </div>
             })

             }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width:95%;
padding: 10px;
box-sizing: border-box;
.exchangeHeader{
    display:flex;
    justify-content: space-around;
}
.exchangeDetails{
    display: flex;
    justify-content: space-between;
    width:100%;
    padding: 15px;
    background-color: white;
    border: 1px solid grey;
    margin: 5px;
}
.exchangePlat{
    display: flex;
    align-items: center;
    flex: .15;
    p{
        margin-right: 10px;
    }
    img {
        height: 20px;
        margin-right: 10px;
    }
}
`

export default Exchanges
