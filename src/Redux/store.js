import {configureStore} from "@reduxjs/toolkit"

import primerosPokemons  from "../reducers/prueba"
import endPointBuscador from "../reducers/buscador"
import miEquipoPokemon from "../reducers/miEquipo"

export default configureStore({
    reducer:{
        primerosPokemons:primerosPokemons,
        endPointBuscador:endPointBuscador,
        miEquipoPokemon:miEquipoPokemon,
    }
})