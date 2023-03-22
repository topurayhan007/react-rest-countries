import React from "react";

const Country = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Population: {props.population}</h3>
    </div>
  );
};

export default Country;
