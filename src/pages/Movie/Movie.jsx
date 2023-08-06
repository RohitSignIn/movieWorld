import "./Movie.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Movie = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=d781c3e1&i=${id}`).then((res) => {
      setData(res.data)
      setLoading(false)
    });
  }, [id]);


  if(!data){
    return (
        <>
        <div className="loader">
        <ClipLoader
            color={"#ffffff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
        </>
      )
    }

  return (
    <>
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