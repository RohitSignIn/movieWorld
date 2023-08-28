import axios from "axios";
import Search from "../APIs/searchAPI";

const useFetchAutoComp = () => { 
    return (search, setSearchData) => {
        if(search != ''){
            axios.get(Search(search)).then((res) => res.data.Search ? setSearchData(res.data.Search) : setSearchData([]));
        }
    }
        
}

export default useFetchAutoComp;