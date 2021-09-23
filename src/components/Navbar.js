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
                <Link className="link" to="/exchanges"><h4>Exchanges</h4></Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: sticky;
top: 0;
height: 100vh;
background-color: rgb(0, 21, 41);
box-sizing: border-box;
padding: 10px;
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
      /* opacity: .9; */
      margin: 10px;
    }
`

export default Navbar
