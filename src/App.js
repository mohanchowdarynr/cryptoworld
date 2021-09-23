import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route,Switch } from 'react-router-dom';
import Cryptocurrencies from './components/Cryptocurrencies';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <Wrapper>
     <div className="left">
     <Navbar />
     </div>
     <div className="right">
     <Switch>
     <Route exact path="/">
      <Home />
     </Route>
     <Route exact path="/currencies">
      <Cryptocurrencies />
     </Route>
     <Route exact path="/exchanges"><Exchanges /></Route>
     <Route exact path="/crypto/:coinId">
              <CryptoDetails />
      </Route>
      </Switch>
     </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
width: 100vw;
display:flex;
background-color:whitesmoke;
.left{
  flex: 0.25;
}
.right{
  flex: 1;
  
}
`
export default App;
