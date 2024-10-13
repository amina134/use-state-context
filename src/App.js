import React, { useState, useRef, useEffect,createContex,useContext } from 'react';
//import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import MovieList from './MovieList';
import Filter from './Filter';
import FormInput from './formInput';
import blueLogo from './icons/checked-eye.png';
import grayLogo from './icons/unchecked_eye.png';
import messages from './fileMsg';
 export const Context = React.createContext();

function App() {

  const [context, setContext] = useState([...messages]);


  const [movies, setMovies] = useState(Movie);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [movieNumber, setMovieNumber] = useState(movies.length);
  const [checked, setChecked] = useState();
  const [seenCounter, setSeenCounter] = useState(movies.filter((el) => el.checked).length);
  const [unSeenCounter, setUnSeenCounter] = useState(movies.filter((el) => !el.checked).length);
 
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [posterURL,setPosterURL]=useState('')
  const [rating,setRating]=useState('')
  

  
  


   

  useEffect(() => {
    setMovieNumber(movies.length);
  }, [movies.length]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setFilterTitle(value);
    } else if (filterType === 'rating') {
      setFilterRating(value);
    }
  };

  const addMovie = async () => {
    // let newMovie = {};
    // console.log('Title : ', title);
    // console.log('Description : ', description);
    // console.log('posterURL : ', posterURL);
    // console.log('Rating : ', rating);

    // newMovie.title = title
    // newMovie.description = description
    // newMovie.posterURL = posterURL
    // newMovie.rating = rating
 


    //  setMovies([...movies, movie]);
    //  setMovie({
    //   title:'',
    //   description:'',
    //   posterURL:'',
    //   rating:''
    //  })
    // setTitle('')
    // setDescription('')
    // setPosterURL('')
    // setRating ('')

    // console.log('Title : ', title.current.value);
    // console.log('Description : ', description.current.value);
    // console.log('posterURL : ', posterURL.current.value);
    // console.log('Rating : ', rating.current.value);


  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= parseFloat(filterRating)
  );

  const handleChecked = (id, value) => {
    const index = filteredMovies.findIndex(obj => {
      return obj.id === id;
    });
    filteredMovies[index].checked = value;
    setSeenCounter(filteredMovies.filter((el) => el.checked).length);
    setUnSeenCounter(filteredMovies.filter((el) => !el.checked).length);
  };

  return (
    
     <Context.Provider value={[context, setContext]}>

    <div className="App">
      <h1 style={{ textAlign: 'center', fontFamily: "fantasy", fontSize: 100, fontStyle: "oblique" }}>Movies{movieNumber}</h1>

      <section className='firstSection'>
        <div className="divFilter">
          <Filter
            filterTitle={filterTitle}
            filterRating={filterRating}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="divInputForm">
          <FormInput 
          movies={movies}
          setMovies={setMovies}

           />
        </div>
      </section>
      <div className="middleDiv">
        <output className='seenCounterOutput'>{seenCounter}</output>
        <img className='AppEyeIcon' src={blueLogo} alt=''></img>
        <output className='unSeenCounterOutput'>{unSeenCounter}</output>
        <img className='AppEyeIcon' src={grayLogo} alt=''></img>
      </div>
      <div className="divMovieList">
        <MovieList setChecked={setChecked} handleChecked={handleChecked} movies={filteredMovies} />
      </div>
    </div >
    </Context.Provider>
  );
}
export default App;
