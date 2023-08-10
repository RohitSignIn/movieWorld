import { ClipLoader } from 'react-spinners'
import './style.css'

const Loader = ({loading}) => {

  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  return (
    <>
      <div className='loader'>
      <ClipLoader
          color={'#ffffff'}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label='Loading Spinner'
          data-testid='loader'
          />
      </div>
    </>
  )
}

export default Loader;  