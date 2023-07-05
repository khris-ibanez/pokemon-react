import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { fetchPrimerosPokemons } from "../../reducers/prueba";
import { fetchPokemon } from "../../reducers/buscador";
import { setEquipo } from "../../reducers/miEquipo";

export function Buscador() {
  const { pokemons } = useSelector((state) => state.primerosPokemons);
  const { poke } = useSelector((state) => state.endPointBuscador);
  const { equipo } = useSelector((state) => state.miEquipoPokemon);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (pokemons.length == 0) {
      dispatch(fetchPrimerosPokemons());
    }
  }, []);
  const pegar = (e) => {
    e.preventDefault();
    navigator.clipboard.readText().then((text) => {
      setInputValue(text);
    });
  };
  const buscar = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(inputValue));
  };
  const agregar = (e) => {
    e.preventDefault();
    dispatch(setEquipo(poke));
  };
  return (
    <main>
      <article>
        <form>
          <label>
            <input
              type="search"
              list="pokes"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="ditto"
            />
          </label>

          <datalist id="pokes">
            {pokemons.map((poke, key) => (
              <Fragment key={key}>
                <option value={poke.name}></option>
              </Fragment>
            ))}
          </datalist>
          <button onClick={buscar}>buscar pokemon</button>
          <button onClick={pegar}>Pegar Texto</button>
        </form>
      </article>

      <section>
        {poke.name && (
          <form>
            <div>
              <h1>{poke.name}</h1>
              <h3>Posición en la Pokedex: {poke.id}</h3>
            </div>
            <div>
              <img src={poke.sprites.front_default} alt={poke.name} />
              <img src={poke.sprites.back_default} alt={poke.name} />
            </div>
            <div>
              <h3>Shiny</h3>
              <img src={poke.sprites.front_shiny} alt={poke.name} />
              <img src={poke.sprites.back_shiny} alt={poke.name} />
            </div>
            <div>
              <h4>Tipo</h4>
              {poke.types.map((type, key) => (
                <p key={key}>{type.type.name}</p>
              ))}
            </div>
            <div>
              <h4>Stats</h4>
              {poke.stats.map((stat, key) => (
                <p key={key}>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              ))}
            </div>
            {equipo.length <= 5 && (
              <button onClick={agregar}>Agregar a mi equipo</button>
            )}
          </form>
        )}
      </section>
    </main>
  );
}
