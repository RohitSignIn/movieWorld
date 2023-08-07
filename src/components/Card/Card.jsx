import { useNavigate } from "react-router-dom"
import "./style/Card.css"

const Card = ({id, title, poster, year}) => {

  const navigate = useNavigate();

  return (
    <>
        <div className="card" title={title} onClick={() => navigate(`movie/${id}`)}>
            <img src={poster}
                alt={title} />
            <div className="card_detail">
                <p className="card_h">{title.length > 17 ? `${title.substring(0, 17)}...` : title}</p>
                <p className="card_t">{year}</p>
            </div>
        </div>
    </>
  )
}

export default Card