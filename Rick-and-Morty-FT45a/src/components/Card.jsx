import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {RemoveFav} from "../redux/Actions.js"
import {AddFav} from "../redux/Actions.js";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Card(props) {
   
   const dispatch = useDispatch();
   const [isFav,setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(RemoveFav(props.id));
      }
      else {
         setIsFav(true);
         dispatch(AddFav(props));
      }
   }

   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "20px",
         }}
      >
         
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) :   (
               <button onClick={handleFavorite}>🤍</button>
                  )
         }
         <button onClick={()=>props.onClose(props.id)}>Close</button>
         <Link to={`/detail/${props.id}`}>
             <button>Detail</button>
         </Link>
         <h2 >{props.name}</h2>
         <h2 >Id: {props.id} </h2>
         <h2 >Status: {props.status} </h2>
         <h2 >Species: {props.species} </h2>
         <h2 >Gender: {props.gender} </h2>
         <h2 >Origin: {props.origin} </h2> 
         <img src={props.image} alt={props.name} style={{borderRadius:"20px"}}/> 
      </div>   
   );
}
