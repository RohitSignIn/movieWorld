import Card from "../../components/Card/Card"
import { useContext, useEffect } from "react"
import movieData from "../../context"
import useSearch from "../../hooks/useSearch"
import "./Home.css"

const Home = () => {
  const searchData = useSearch();
  const {data} = useContext(movieData)
  
  useEffect(() => {
    searchData("naruto");
  }, [])

  return (
    <section id="home">
      <div id="cards">
        {data && data.map((movie) => {
          return (
            <Card 
            key={movie.imdbID} 
            id={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster}
            year = {movie.Year} 
            />
            )
          }
          )}
      </div>
    </section>
  )
}

export default Home