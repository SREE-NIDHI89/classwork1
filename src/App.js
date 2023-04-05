//import logo from './logo.svg';
import './App.css';
import Entry from './components/day6.2';
import { Route,Routes } from 'react-router-dom';
import Albums from './components/Album';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Singers from './components/Singers';
import Usestates from './components/day8';
import AXIOS from './components/day7';
import List from './components/day6';
function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}
function App() {
  return (

  
  <div>
  <br></br>
  <h2>day 6</h2>
  <h1 style={{ textAlign:"left"}}> Products</h1>
  <dl >{List.map(createEntry)}</dl>
  <h1>------------------------------------------------------------------------</h1>

  <br></br>
  <h2>day 7 </h2>
  <AXIOS></AXIOS>
  <h1>------------------------------------------------------------------------</h1>


  <br></br>
  <h2>day 8</h2>
  <Usestates></Usestates>
  <h1>------------------------------------------------------------------------</h1>


  <br></br>
  <h2>day 9</h2>

  <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/Album' element={<Albums/>}></Route>
        </Routes>
      </div>



  </div>

  
  );
}

export default App;
