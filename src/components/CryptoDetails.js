import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import { useGetCryptoDetailsQuery } from '../Resources/cryptoApi'
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const {data,isFetching} =useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;
    
    if(isFetching){
        return <h1>Loading</h1>
    }
    return (
        <Wrapper>
           <div className="details">
               <h1>{cryptoDetails.name}</h1>
               <img src={cryptoDetails.iconUrl} alt="coin Logo"/>
           </div>
           <div className="market"><h1>Market Cap</h1><h3>{`$ ${millify(cryptoDetails.marketCap)}`}</h3></div>
           <div className="detailDescription">
               {HTMLReactParser(cryptoDetails.description)}
           </div>
           <div className="detailPrice">
               <h3>Highest Price:</h3><h3>{`$ ${millify(cryptoDetails.allTimeHigh.price)}`}</h3>
           </div> 
           <div className="detailPrice">
           <h3>Current Price:</h3><h3>{`$ ${millify(cryptoDetails.price)}`}</h3>
           </div>
           <a href={cryptoDetails.websiteUrl}>{cryptoDetails.websiteUrl}</a>
        </Wrapper>
    )
}
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px;
   .details{
       width:100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 20px;
       img{
           height: 50px;
       }
   }
   .detailDescription{
       padding: 10px;
   }
   .market{
       /* display: flex;
       justify-content: center;
       flex-direction: column; */
       text-align: center;
       padding: 20px;
   }
   .detailPrice{
    text-align: center;
       padding: 20px;
   }
   a {
       letter-spacing: 2px;
       font-weight: 800;
       color:red;
   }
`

export default CryptoDetails
