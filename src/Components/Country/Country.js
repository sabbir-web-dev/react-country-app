import React from 'react'

import "./Contry.css"

export default function Country(props){
  const {flags,area,name,population,region,capital  } = props.country.country;

  const removeHendel = (name) =>{
    props.removeData(name)
  }
  return (
    <div className='country'>
        <img src={flags.png} alt={name.common} />

        <h3>Name: {name.common}</h3>
        <p>Capital: {capital}</p>
        <p><small>Region: {region}</small></p>
        <p><small>Area: {area}</small></p>
        <p>Population: {population}</p>

        <div className="btn-wrap">
          <button onClick={()=> removeHendel(name.common)}>Remove</button>
        </div>
    </div>
  )
}
