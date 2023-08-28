import { useContext, useEffect, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import useFetchAutoComp from '../../hooks/useFetchAutoComp';
import movieData from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faHouse } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../../hooks/useTheme';
import './Header.css';

const Header = () => {

  // const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [menuPopUp, setMenuPopUp] = useState(false); 
  const {theme} = useContext(movieData)

  const navigate = useNavigate();
  const searchDataHome = useSearch();
  const FetchAutoComp = useFetchAutoComp();
  

  const SearchAutoComp = useRef(null);

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
        <div id='logo'>
          <h1><Link to='/'>MovieWorld</Link></h1>
        </div>
        <div>
          <input type='text' 
            placeholder='Search Movie...' 
            onFocus={() => SearchAutoComp.current.style.display = 'block'}
            onBlur={() => SearchAutoComp.current.style.display = 'none'}
            onChange={useDebounce((e) => FetchAutoComp(e.target.value, setSearchData))}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                searchDataHome(e.target.value)
              }
            }}
            />

            <div ref={SearchAutoComp} id='search_list'>
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
        <div className='lg-device'>
          <div id='theme-mode' onClick={() => Theme(true)}>
            <FontAwesomeIcon icon={theme=='dark' ? faSun : faMoon} />
          </div>
        </div>
        <div className='mob-device'>
          <div>
            <div id='hamburger'
            onClick={() => setMenuPopUp(!menuPopUp)}
            >
              <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 50 50' width='30px' height='30px'><path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z'/></svg>
            </div>
            {menuPopUp && <div id='menu'>
              <div id='theme-mode' onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faHouse} />
                <p>Home</p>
              </div>
              <div id='theme-mode' onClick={() => Theme(true)}>
                <FontAwesomeIcon icon={theme=='dark' ? faSun : faMoon} />
                <p>{theme}Mode</p>
              </div>
            </div>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header