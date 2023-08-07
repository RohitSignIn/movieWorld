import { ClipLoader } from 'react-spinners'
import './style.css'

const Loader = ({loading}) => {
  return (
    <>
      <div className='loader'>
      <ClipLoader
          color={'#ffffff'}
          loading={loading}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
          />
      </div>
    </>
  )
}

export default Loader;  