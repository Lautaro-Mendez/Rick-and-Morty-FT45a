import { ADD_FAV, ORDER, REMOVE_FAV, FILTER } from "./Action-types"

const initialState = {
    myFavorites:[],
    allCharacters: []
}

export default function Reducer(state=initialState,{type,payload}) {
    switch(type) {
        case ADD_FAV:
            return{
                ...state,
                allCharacters:[...state.allCharacters,payload],
                myFavorites: [...state.allCharacters,payload]

            }
        case REMOVE_FAV:
            const filteredFavs = state.allCharacters.filter(favorite=>favorite.id !== Number(payload))
            return{
                ...state,
                allCharacters: filteredFavs,
                myFavorites: filteredFavs
            }
        case FILTER:
            if(payload==="All")return{
                ...state,
                myFavorites: state.allCharacters
            }
            const filtereFavs = state.allCharacters.filter(char=>char.gender === payload)
            return{
                ...state,
                myFavorites: filtereFavs
            }
        case ORDER:
            const orderCopy = [...state.myFavorites];
            if(payload === "A"){
                orderCopy.sort((a,b)=>a.id-b.id);
            }
            if(payload === "D"){
                orderCopy.sort((a,b)=>b.id-a.id);
            }
            return{
                ...state,
                myFavorites: orderCopy
            }
        default: return {...state}
    }
}