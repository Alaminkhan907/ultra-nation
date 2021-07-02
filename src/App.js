import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        // const names= data.map(country=>country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>Country loaded {countries.length}</h1>
    </div>
  );
}

export default App;
