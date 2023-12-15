import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { ORDER, FILTER } from "../redux/Action-types";
import { OrderCards, FilterCards } from "../redux/Actions";

export default function Favorites({onClose}){

   const myFavorites = useSelector(state => state.myFavorites);

   const dispatch = useDispatch();

   const handleOrder = event => {
      dispatch(OrderCards(event.target.value));
   }
   
   const handleFilter = event => {
      dispatch(FilterCards(event.target.value));
   }

   const [aux, ]

   return (
      <div>
         
         <div>
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
               <option value="All">All</option>
            </select>
         </div>

         <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
            }}>

            { 
            !myFavorites.length ? <h2>No Favorites</h2> :
            myFavorites.map(myFavorite => (
               <Card 
                  key={myFavorite.id} 
                  id={myFavorite.id} 
                  name={myFavorite.name} 
                  status={myFavorite.status} 
                  species={myFavorite.species} 
                  gender={myFavorite.gender} 
                  origin={myFavorite.origin} 
                  image={myFavorite.image} 
                  onClose={onClose} 
               />)
               )
            }
         </div>
      </div>
   );

}