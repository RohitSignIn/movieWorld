import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useSearchById = ({setData, setLoading}) => {
    const {id} = useParams();
    useEffect(() => {

        axios.get(`https://www.omdbapi.com/?apikey=d781c3e1&i=${id}&plot=full`).then((res) => {
            setData(res.data)
            setLoading(false)
        });

    }, [id]);
}
    
export default useSearchById