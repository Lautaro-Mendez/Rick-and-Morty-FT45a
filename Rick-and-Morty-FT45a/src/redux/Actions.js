import { ADD_FAV , REMOVE_FAV} from "./Action-types"

export function AddFav(character){
    return {
        type:ADD_FAV,
        payload: character
    }
}

export function RemoveFav(id){
    return {
        type:REMOVE_FAV,
        payload: id
    }
}