const initialState = {myFavorites: []}
import { ADD_FAV, REMOVE_FAV } from "./Action-types"

export default function Reducer(state=initialState,{type,payload}) {
    switch(type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites,payload]

            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(favorite=>favorite.id !== Number(payload))
            return{
                ...state,
                myFavorites: filteredFavs,
            }
        default: return {...state}
    }
}