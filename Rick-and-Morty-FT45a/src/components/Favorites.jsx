import Card from "./Card";
import { useSelector } from "react-redux";

export default function Favorites({onClose}){

    const myFavorites = useSelector(state => state.myFavorites);

    return (
      <div
         style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
         }}
      >
         { 
            myFavorites.map(myFavorite => (
               <Card 
                  key={myFavorite.id} 
                  id={myFavorite.id} 
                  name={myFavorite.name} 
                  status={myFavorite.status} 
                  species={myFavorite.species} 
                  gender={myFavorite.gender} 
                  origin={myFavorite.origin.name} 
                  image={myFavorite.image} 
                  onClose={onClose} 
               />)
            )
         }
      </div>
   );

}