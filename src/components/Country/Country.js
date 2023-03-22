import React from "react";

const Country = (props) => {
  // console.log(props.country);
  const { area, region, population, name, flags } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name: {name.common}</h3>
      <h5>Region: {region}</h5>
      <h5>Population: {population}</h5>
      <h5>Area: {area}</h5>

      {/* <h3>Name: {props.country.name.common}</h3>
      <h5>Region: {props.country.region}</h5>
      <h5>Population: {props.country.population}</h5>
      <h5>Area: {props.country.area}</h5> */}
    </div>
  );
};

export default Country;
