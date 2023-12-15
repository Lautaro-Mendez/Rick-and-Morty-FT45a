import { ADD_FAV , REMOVE_FAV, FILTER, ORDER} from "./Action-types"

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

export function FilterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}

export function OrderCards(order){
    return{
        type: ORDER,
        payload: order
    }
} 