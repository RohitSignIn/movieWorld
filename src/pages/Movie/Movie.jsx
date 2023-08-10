import { useState } from "react";
import useSearchById from "../../hooks/useSearchById";
import Loader from "../../components/Loader/Loader";
import '@smastrom/react-rating/style.css';
import RatingComp from "../../components/Rating/RatingComp";
import "./style/style.css"

const Movie = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useSearchById({setData, setLoading})

  return (
    <>
    { !data && <Loader loading={loading} />}
    {
      data && <div id="mov_card_con">
        <div>
        <div id="movie_card" title={data.Title} >
            <img src={data.Poster}
                alt={data.Title} />
            <div className="card_detail">
                <p className="card_h">{data.Title.length > 24 ? `${data.Title.substring(0, 24)}...` : data.Title}</p>
                <p className="card_t">{data.Runtime}</p>
            </div>
        </div>
        </div>
        <div className="oth_details">
          <h1>{data.Title}</h1>
          
          <RatingComp rating={data.imdbRating} />

          <p>Released, {data.Released}</p>
          <div className="genre">
          {
            data.Genre.split(",").map((elem) => {
              return <span key={elem}>{elem}</span>
            })
          }
          </div>
          <div>
            
            <br />
            <p>{data.Plot}</p>
          </div>
        </div>
      </div>
    }   
  </>
  )
}

export default Movie