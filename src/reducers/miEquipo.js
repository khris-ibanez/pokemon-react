import { createSlice } from "@reduxjs/toolkit";

export const miEquipoSlice = createSlice({
  name: "miEquipoPokemon",
  initialState: { equipo: [] },
  reducers: {
    setEquipo: (state, action) => {
      
      if(state.equipo.length <=5)
      state.equipo.push(action.payload)
    },
    SetDelete:(state, action)=>{
      let key= action.payload;
      state.equipo.splice(key,1);
    }
  },
});

export const { setEquipo, SetDelete } = miEquipoSlice.actions;
export default miEquipoSlice.reducer;
