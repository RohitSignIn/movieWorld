import { useContext } from "react"
import movieData from "../context"

const useTheme = () => {
    
    const {setTheme} = useContext(movieData);
    return (themeChange) => {
        let currTheme = localStorage.getItem("app-theme");
        if(currTheme){
            if(themeChange){
                currTheme = currTheme == "dark" ? "light" : "dark"
                localStorage.setItem("app-theme", currTheme);
                setTheme(currTheme);
            }
        }else{
            localStorage.setItem("app-theme", "dark");
        }
        setTheme(currTheme)
    }
}

export default useTheme;