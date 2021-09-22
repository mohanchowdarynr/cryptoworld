import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Wrapper>
            <h1>Crypto World</h1>
            <div className="categories">
               <Link className="link" to="/">
                <h4>Home</h4>
                </Link>
                <Link className="link" to='/currencies'>
                <h4>Crypto Currencies</h4>
                </Link>
                <h4>Exchanges</h4>
                <h4>News</h4>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: sticky;
/* left: 0;  */
top: 0;
/* padding: 30px; */
margin: 10px;
height: 100vh;
margin: 0px;
background-color: rgb(0, 21, 41);
h1 {
  color: white;
  letter-spacing: 2px;
  margin: 20px 10px;
}
}
.categories{
    display: flex;
    flex-direction: column;
    padding:20px 0;
    h4{
      color: white;
      opacity: .9;
      margin: 10px;
    }
`

export default Navbar
