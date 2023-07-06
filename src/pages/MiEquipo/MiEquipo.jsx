import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchPrimerosPokemons } from "../../reducers/prueba";
import { SetDelete } from "../../reducers/miEquipo";
import "./MiEquipo.css";
export function MiEquipo() {
  const { pokemons } = useSelector((state) => state.primerosPokemons);
  const { equipo } = useSelector((state) => state.miEquipoPokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pokemons.length == 0) {
      dispatch(fetchPrimerosPokemons());
    }
  }, []);

  const liberar = (key) => {
    dispatch(SetDelete(key))
    console.log(equipo.length);
  };
  return (
    <>
    {equipo.length<=0?<h1 id="noPokemon">Aun no has seleccionado Pokemones</h1>:<main id="mainEquipo">
      {equipo.map((pokemon, key) => (
        <div key={key} id="pokemonDelEquipo">
          <h1 >{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={() => liberar(key)}>Liberar</button>
        </div>
      ))}
    </main>}
    
    </>
  );
}
