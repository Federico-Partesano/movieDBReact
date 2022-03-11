import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import { Result } from "../../models/RespMovie";

const Card: FC<{result: Result}> = ({result: {title, poster_path, overview, id}}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt="Card" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{overview.substring(0,100) + (overview.length > 100 && "...")}</p>
           <span className="btn btn-primary"> <Link to={`/home/movie/${id}`} style={{color: "white", textDecoration: "none"}}>Go somewhere</Link></span>
        </div>
    </div>
  )
}

export default Card;