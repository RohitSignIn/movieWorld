import { Link } from "react-router-dom"
import "./Card.css"

const Card = ({id, title, poster}) => {

  return (
    <section className="card">
      <Link to={`movie/${id}`}>
        <div>
            <img src={poster} alt={title} />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </Link>
    </section>
  )
}

export default Card