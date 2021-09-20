import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Wrapper>
     <div className="left">
     <Navbar />
     </div>
     <div className="right">
      <Home />
     </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
width: 100vw;
display:flex;
/* position: relative; */
background-color:whitesmoke;
.left{
  flex: 0.25;
}
.right{
  flex: 1;
}
`
export default App;
