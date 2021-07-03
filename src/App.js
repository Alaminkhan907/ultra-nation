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
  return (
    <div>
      <h1>Country loaded {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country} key={country.alpha2Code}></Country>
      ))}
    </div>
  );
}

export default App;
