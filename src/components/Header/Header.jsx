import { useContext, useEffect, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import useFetchAutoComp from '../../hooks/useFetchAutoComp';
import movieData from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import useTheme from '../../hooks/useTheme';

const Header = () => {

  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const {theme} = useContext(movieData)

  const navigate = useNavigate();
  const searchDataHome = useSearch();
  useFetchAutoComp(search, setSearchData)

  const styleList = useRef(null);

  function inputBlur(id){
    navigate(`/movie/${id}`)
  }
  
  const Theme = useTheme()

  useEffect(() => {
    Theme(false);
  }, [])

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
            onChange={useDebounce((e) => setSearch(e.target.value))}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                searchDataHome(search)
              }
            }}
            />

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
          <div id='theme-mode' onClick={() => Theme(true)}>
            <FontAwesomeIcon icon={theme=="dark" ? faSun : faMoon} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header