import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countrices, setCountrices] = useState([]);
    useEffect(async()=>{
        const url = await fetch('https://restcountries.com/v3.1/all');
        const data = await url.json();
        setCountrices(data);
    },[])
    return (
        <div>
             <h1>Countries :{countrices.length}</h1>
             <div className='countries-container'>
             {
                //  countrices.map((country, index)=> <Country country={country} name={country.name.common} population ={country.population}></Country>)
                 countrices.map((country, index)=> <Country country={country} key={index}></Country>)
             }
             </div>
        </div>
    );
};

export default Countries;