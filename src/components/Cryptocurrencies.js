import React from 'react'
import styled from 'styled-components';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Resources/cryptoApi';

const Cryptocurrencies = () => {
    const {data : cryptoList} = useGetCryptosQuery();
    return (
        <Wrapper>
           <h1>crypto currencies</h1>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width: 100%;

`

export default Cryptocurrencies
