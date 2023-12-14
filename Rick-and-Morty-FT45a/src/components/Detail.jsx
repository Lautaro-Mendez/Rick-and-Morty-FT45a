import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Detail(props){
    
    const {id} = useParams();
    const [character,setCharacter]=useState([]);
    const URL = "https://rym2.up.railway.app/api/character";
    const apikey = "henrystaff";

    useEffect(() => {
        axios(`${URL}/${id}?key=${apikey}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
    }, [id]);

    return(
        <div>
            <h1 >{character?.name} </h1> 
            <img src={character.image} alt={character.name} style={{borderRadius:"70px"}}/>
            <h2 >Id: {character?.id} </h2>
            <h2 >Status: {character?.status} </h2>
            <h2 >Species: {character?.species} </h2>
            <h2 >Gender: {character?.gender} </h2>
            <h2 >Origin: {character?.origin?.name} </h2>
            <h2 >Location: {character?.location?.name} </h2>
        </div>
    )
}