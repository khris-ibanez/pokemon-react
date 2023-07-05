import { useEffect, useState } from "react";

import { fetchPrimerosPokemons } from "../../reducers/prueba";
import { useDispatch, useSelector } from "react-redux";

import "./Home.css";

function Home() {
  const [pokemonAleatorio, setPokemonAleatorio] = useState();
  const minimo = 0;
  const maximo = 150;
  const { pokemons } = useSelector((state) => state.primerosPokemons);
  const dispatch = useDispatch();
  const pokePrimero = pokemons.slice(pokemonAleatorio, pokemonAleatorio + 1);
  useEffect(() => {
    if (pokemons.length == 0) {
      dispatch(fetchPrimerosPokemons());
    } 
  }, []);
  useEffect(() => {
    setPokemonAleatorio(getRandomIntInclusive(minimo, maximo));
  }, []);
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let one = 1;
    return Math.floor(Math.random() * (max - min + one) + min);
  }

  function copiar(pokemon) {
    navigator.clipboard.writeText(pokemon);
  }

  return pokePrimero.map((pokemon, index) => (
    <div key={index}>
      <p>{pokemon.name}</p>
      <button onClick={() => copiar(pokemon.name)}>copiar</button>
    </div>
  ));
}

export default Home;
