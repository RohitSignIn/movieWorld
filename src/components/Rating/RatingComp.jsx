import { Rating, ThinStar } from "@smastrom/react-rating";

const RatingComp = ({rating}) => {

    const ratingStyle = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fff'
      }

  return (
    <div>
        <Rating
            value={Math.floor(rating)} 
            style={{maxWidth: 250}}
            items={10} 
            itemStyles={ratingStyle}  
          />
    </div>
  )
}

export default RatingComp