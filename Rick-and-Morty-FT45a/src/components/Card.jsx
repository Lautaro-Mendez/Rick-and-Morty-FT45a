import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "20px",
         }}
      >
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
