const error404 = "https://shots.codepen.io/username/pen/ZjLwYz-800.jpg?version=1532655820"

export default function NotFound(props){
    
    return(
        <div>
            <img src={error404} alt="Not Found" />
        </div>
    )
}