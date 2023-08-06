import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Movie from '../pages/Movie/Movie'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  )
}

export default MainRoutes