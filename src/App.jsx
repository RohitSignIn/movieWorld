import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import movieData from './context'

function App() {
// import.meta.env.VITE_API_KEY

const [data, setData] = useState("");

  return (
    <>
    <div id='top_container'>   
      <div id='bg_layer'></div>
        <movieData.Provider value={{data, setData}}>
          <Header />
          <div id="lineBreak"> </div>
          <MainRoutes /> 
        </movieData.Provider>
    </div>
    </>
  )
}

export default App;
