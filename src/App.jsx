import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import movieData from './context'

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
          <MainRoutes /> 
        </movieData.Provider>
    </div>
    </>
  )
}

export default App;
