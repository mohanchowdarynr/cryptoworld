import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Wrapper>
            <h1>Crypto World</h1>
            <div className="categories">
                <h4>Home</h4>
                <h4>Crypto Currencies</h4>
                <h4>Exchanges</h4>
                <h4>News</h4>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
 /* position: fixed; */
/* left: 0;  */
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
      opacity: 0.9;
      margin: 10px;
    }
`

export default Navbar
