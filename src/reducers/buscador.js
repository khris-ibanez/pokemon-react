import { createSlice } from "@reduxjs/toolkit";

export const buscadorSlice = createSlice({
  name: "endPointBuscador",
  initialState: { poke: {} },
  reducers: {
    setBuscador: (state, action) => {
      state.poke = action.payload;
    },
  },
});

export const { setBuscador } = buscadorSlice.actions;
export default buscadorSlice.reducer;

export const fetchPokemon = (endPoint) => (dispatch) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}`)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("No existe ese pokemon / error en la solicitud")
    )
    .then((data) => dispatch(setBuscador(data)))
    .catch((error) => alert(error));
};
