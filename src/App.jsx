import { useState, lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header/Header'
import movieData from './context'
import Loader from './components/Loader/Loader'

const MainRoutes = lazy(() => import("./routes/MainRoutes"))

function App() {
// import.meta.env.VITE_API_KEY

const [data, setData] = useState("");
const [theme, setTheme] = useState("dark");

  return (
    <>
    <div id='top_container' data-theme={theme}>   
      <div id='bg_layer'></div>
        <movieData.Provider value={{data, setData, theme, setTheme}}>
          <Header />
          <div id="lineBreak"> </div>
          <Suspense fallback={<Loader />}>  
          <MainRoutes /> 
          </Suspense>
        </movieData.Provider>
    </div>
    </>
  )
}

export default App;
