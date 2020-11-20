import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Card from './components/Card'
import {apiKey} from './ApiKey'

const baseUrl = 'https://api.themoviedb.org/3/search/company?'




function App() {

const [movieList, setMovieList] = useState([])

  const movieData = async() => await axios.get(baseUrl,{
    params:{
      api_key : apiKey,
      page : 1,
      query : 'Lord of Rings'
    } 
  } )
  

  return (
    <div className="App">
      <p>imdb</p>
      <Card/>
    </div>
  );
}

export default App;
