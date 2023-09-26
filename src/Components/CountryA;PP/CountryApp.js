import React, { useEffect, useState } from "react";

import style from "./CountryA.module.css";
import Countrys from "../Countrys/Countrys";
import Search from "../Search/Search";

const url = "https://restcountries.com/v3.1/all";
export default function CountryApp() {
  const [data, setData] = useState([]);
  const [isLodding, setIslodding] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountry, setFilterCoountry] = useState(data);

  const dataManez = async (url) => {
    setIslodding(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
        setData(data);
        setFilterCoountry(data);
        setIslodding(false);
        setError(null);
    } catch (error) {
        setIslodding(false);
        setError(error);
    }
  };
  useEffect(() => {
    dataManez(url);
  }, []);

  const removeHendel = (removeName) => {
    const filter = filterCountry.filter(
      (country) => country.name.common !== removeName
    );
    setFilterCoountry(filter);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const newCountries = data.filter((country) =>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilterCoountry(newCountries);
  };
  return (
    <div className={style.Wrap}>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      <div className={style.messageShow}>
        {isLodding && <h4>Data is Lodding...</h4>}
        {error && <h4>{error.message}</h4>}
      </div>
      {filterCountry && (
        <Countrys countrys={filterCountry} removeData={removeHendel} />
      )}
    </div>
  );
}
