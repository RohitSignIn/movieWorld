import Card from "../../components/Card/Card"
import Search from "../../APIs/searchAPI"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import movieData from "../../context"
import "./Home.css"
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const {data, setData} = useContext(movieData)
  
  useEffect(() => {
    axios.get(Search("world", "", "", )).then((res) => {
      setData(res.data.Search);
      setLoading(false);
    });
  }, [])

  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

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
    <section id="home">
      <div id="cards">
        {data.length && data.map((movie) => <Card key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} />
        )}
      </div>
    </section>
  )
}

export default Home