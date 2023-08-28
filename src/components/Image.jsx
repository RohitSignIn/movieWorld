import { LazyLoadImage } from 'react-lazy-load-image-component'

const Image = ({Poster, Title}) => {
  return (
    <LazyLoadImage 
          src={Poster} 
          alt={Title} 
          effect="opacity" 
          width={"300px"} 
          height={"380px"} 
          />
  )
}

export default Image