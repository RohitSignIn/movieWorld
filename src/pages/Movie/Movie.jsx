import "./Movie.css"
import { useState } from "react";
import useSearchById from "../../hooks/useSearchById";
import Loader from "../../components/Loader/Loader";

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
          <section id="movie_card">
              <div>
                  <img src={data.Poster} alt={data.Title} />
              </div>
              <div>
                <p>{data.Title}</p>
              </div>
          </section>
        </div>
        <div>
          <h1>{data.Title}</h1>
          <p>Year: {data.Year}</p>
          <br />
          <div>
            <p>Director: {data.Director}</p>
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