import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchPrimerosPokemons } from "../../reducers/prueba";
import { SetDelete } from "../../reducers/miEquipo";
export function MiEquipo() {
  const { pokemons } = useSelector((state) => state.primerosPokemons);
  const { equipo } = useSelector((state) => state.miEquipoPokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pokemons.length == 0) {
      dispatch(fetchPrimerosPokemons());
    }
  }, []);

  const liberar=( key)=>{
    
    dispatch(SetDelete(key))
  }
  return <main>
    {equipo.map((pokemon, key)=>(<Fragment key={key} >
<h1>{pokemon.name}</h1>
<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
<button onClick={()=>liberar(key)}>Liberar</button>
    </Fragment>))}
    
  </main>;
}
