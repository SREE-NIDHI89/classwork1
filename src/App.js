//import logo from './logo.svg';
import './App.css';

import Display from './components/day1';
import Day_2 from './components/day2';
import Coffeeshop from './components/day3';
import Name from './components/day4'
import Listfunction from './components/day5';


function App() {
  return (
    <div>


    <br></br>
    <h1>day1</h1>
    <Display/>
    <h1>---------------------------------------------------------------------</h1>


    <br></br>
    <h1>day2</h1>
    <Day_2/>
    <h1>---------------------------------------------------------------------</h1>


    <br></br>
    <h1>day3</h1>
    <Coffeeshop></Coffeeshop>
    <h1>---------------------------------------------------------------------</h1>


    <br></br>
    <h1>day4</h1>
    <Name/>
    <h1>---------------------------------------------------------------------</h1>


    <br></br>
    <h1>day5</h1>
    <Listfunction/>
    <h1>---------------------------------------------------------------------</h1>


    </div>
   
  );
}

export default App;
