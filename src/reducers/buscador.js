import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const buscadorSlice = createSlice({
  name: "endPointBuscador",
  initialState: { poke: {}, isLoading: false },
  reducers: {
    setBuscador: (state, action) => {
      state.poke = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setBuscador } = buscadorSlice.actions;
export default buscadorSlice.reducer;

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetch",
  (endPoint, thunkAPI) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject("No existe ese pokemon / error en la solicitud")
      )
      .then((data) => thunkAPI.dispatch(setBuscador(data)))
      .catch((error) => alert(error));
  }
);
