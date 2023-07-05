import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "primerosPokemons",
  initialState: { pokemons: [] },

  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;

export const fetchPrimerosPokemons = () => (dispatch) => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res) =>
      res.ok ? res.json() : Promise.reject("Error en la solicitud")
    )
    .then((data) => dispatch(setPokemons(data.results)))
    .catch((error) => alert(error));
};
