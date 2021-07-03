import React from "react";

const country = (props) => {
  //console.log(props.country.name);
  const { name, population, flag, region } = props.country;
  const flagStyle = { height: "50px" };
  const handleAddCountry = props.handleAddCountry;

  return (
    <div>
      <h4>This is a country{name} </h4>
      <img style={flagStyle} src={flag} alt="" />
      <h5>Population {population}: </h5>
      <p>Region {region}</p>
      <button onClick={() => handleAddCountry(props.country)}>Add </button>
    </div>
  );
};

export default country;
