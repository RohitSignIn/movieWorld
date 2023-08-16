import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./style/Card.css"

const Card = ({id, title, poster, year}) => {

  const navigate = useNavigate();

  return (
    <>
        <div className="card" title={title} onClick={() => navigate(`movie/${id}`)}>
            <LazyLoadImage src={poster}
                alt={title} effect="blur" />
            <div className="card_detail">
                <p className="card_h">{title.length > 17 ? `${title.substring(0, 17)}...` : title}</p>
                <p className="card_t">{year}</p>
            </div>
        </div>
    </>
  )
}

export default Card