import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Persons/Person';
import Headers from './components/Headers/Headers';

function App() {
  return (
    <div className="App">
      {/* <GetAllCountries></GetAllCountries> */}
      {/* <Headers></Headers>
      <Person></Person> */}
      <Countries></Countries>


    </div>
  );
}


/* 
function GetAllCountries(props){
  const [countries, setCountries] = useState([])

    useEffect(async ()=>{
        const url = await fetch('https://restcountries.com/v3.1/all');
        const data = await url.json();
        setCountries(data);
    } , [])
    console.log(countries);
  return(
      <div>
          <h2>Visiting All Countries</h2>
          <h4>Total Country : {countries.length}</h4>

          {
            countries.map((country, index) => <Country name = {country?.name?.common}  population = {country?.population}></Country>)
          }
      </div>
  )
}


function Country(props){

  return(
      <div>
          <h2>Country Name: {props.name}</h2>
          <h3>Population: {props.population}</h3>
      </div>
  )
} */
export default App;
