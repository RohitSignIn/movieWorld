const Search = (search, type, year, page) => {
    
    let url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`;
    
    if(type){
        // movies, series, episode
        url += `&type=${type}`;
    }else if(year){
        url += `&y=${year}`;
    }else if(page){
        url += `&page=${page}`;
    }
    
    return url;
}

export default Search;