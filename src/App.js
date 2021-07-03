import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
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
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div>
      <h1>Country loaded {countries.length}</h1>
      <h4>Country added {cart.length} </h4>
      <Cart cart={cart}></Cart>
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
