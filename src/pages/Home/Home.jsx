import { useEffect, useState } from "react";

import { fetchPrimerosPokemons } from "../../reducers/prueba";
import { useDispatch, useSelector } from "react-redux";

import "./Home.css";

function Home() {
  const [pokemonAleatorio, setPokemonAleatorio] = useState();
  const [imgPokemon, setImgPokemon] = useState();
  const [idPokemon, setIdPokemon] = useState(1);
  const [inputPokemon, setIputPokemon] = useState();
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

  useEffect(() => {
    pokePrimero.map((pokemon) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon.name)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject("No existe ese pokemon / error en la solicitud")
        )
        .then((data) => setImgPokemon(data.sprites.front_default))
        .catch((error) => alert(error))
    );
  }, [pokePrimero]);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let one = 1;
    return Math.floor(Math.random() * (max - min + one) + min);
  }

  const isPikachu = (e) => {
    e.preventDefault();
    e.keyCode === 13
      ? pokePrimero.map((pokemon) =>
          idPokemon <= 3
            ? pokemon.name === inputPokemon
              ? setIdPokemon(4)
              : setIdPokemon(idPokemon + 1)
            : null
        )
      : null;
  };

  return (
    <div>
      <label>
        <img id={"pokemonId-" + idPokemon} src={imgPokemon} />

        <input
          onKeyUp={isPikachu}
          onChange={(e) => setIputPokemon(e.target.value.toLowerCase())}
        />
      </label>
      {idPokemon === 4 &&
        pokePrimero.map((pokemon, key) => <h1 key={key}>{pokemon.name}</h1>)}
    </div>
  );
}

export default Home;
