import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCountries(data);
        // const names= data.map(country=>country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddCountry = () => {
    console.log("country added");
  };
  return (
    <div>
      <h1>Country loaded {countries.length}</h1>
      <h4>Country added </h4>
      {countries.map((country) => (
        <Country
          country={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha2Code}
        ></Country>
      ))}
    </div>
  );
}

export default App;
