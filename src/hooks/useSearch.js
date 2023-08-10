import { useContext } from "react"
import Search from "../APIs/searchAPI"
import movieData from "../context"
import axios from "axios"

const useSearch = () => {
  const {setData} = useContext(movieData)

  return (...args) => {
    // search, type year page
    const [ search, type, year, page ] = args;

      axios.get(Search(search, type, year, page)).then((res) => {
        setData(res.data.Search);
      });

  }
}

export default useSearch;