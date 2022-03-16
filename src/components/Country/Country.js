import React from 'react';
import "./Country.css";
const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.country.flags.png} alt="" />
            <h2>Name: {props.country.name.common} </h2>
            <h3 style={{color:'blue'}}>Population : {props.country.population}</h3>
            <h4>Region: {props.country.region}</h4>
            <h4>Area: {props.country.area}</h4>
        </div>
    );
};

export default Country;