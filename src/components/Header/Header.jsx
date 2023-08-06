import { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import Search from '../../APIs/searchAPI';
import axios from 'axios';
import movieData from '../../context';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const {setData} = useContext(movieData);
  const [searchData, setSearchData] = useState([]);
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(search != ''){
          axios.get(Search(search)).then((res) => setSearchData(res.data.Search));
    }
  }, [search]);

  const styleList = useRef(null);
  const getList = useRef(null);

  async function fetchData(){
    const res = await axios.get(Search(search));
    setData(res.data.Search);
  }
  
  const navigate = useNavigate();

  function inputBlur(id){
    navigate(`/movie/${id}`)
  }

  return (    
    <>
      <nav>
        <div>
          <h1><Link to="/">MovieWorld</Link></h1>
        </div>
        <div>
          <input type='text' 
          placeholder='Search Movie...' 
          onFocus={() => {
            styleList.current.style.visibility = 'visible'
          }} 

          onBlur={() => {
            styleList.current.style.visibility = 'hidden'
          }}

          onChange={useDebounce((e) => setSearch(e.target.value))} />
          <button onClick={fetchData}>Search</button>
          <div ref={styleList} id='search_list'>
            <ul>
              {searchData && searchData.map(data => {
                return (
                  <li ref={getList} key={data.imdbID} onMouseDown={() => inputBlur(data.imdbID)}>{data.Title}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div><div>🌔</div></div>
      </nav>
    </>
  )
}

export default Header