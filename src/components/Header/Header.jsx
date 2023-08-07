import { useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import './Header.css';
import useFetchAutoComp from '../../hooks/useFetchAutoComp';

const Header = () => {

  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const navigate = useNavigate();
  const searchDataHome = useSearch();
  useFetchAutoComp(search, setSearchData)

  const styleList = useRef(null);

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
            onFocus={() => styleList.current.style.display = 'block'}
            onBlur={() => styleList.current.style.display = 'none'}
            onChange={useDebounce((e) => setSearch(e.target.value))} />
          
          <button 
            onClick={() => searchDataHome(search)}>Search
          </button>

            <div ref={styleList} id='search_list'>
              <ul>
                {
                  searchData && searchData.map(data => {
                    return (
                      <li key={data.imdbID} onMouseDown={() => inputBlur(data.imdbID)}>{data.Title}</li>
                    )
                  })
                }
              </ul>
            </div>

        </div>
        <div>
          <div>🌔</div>
        </div>
      </nav>
    </>
  )
}

export default Header