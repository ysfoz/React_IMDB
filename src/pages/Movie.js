import axios from 'axios'
import { useEffect, useState } from 'react'

import {apiKey} from '../components/ApiKey'
import '../App.css';
import {CardList} from '../components/CardList'
import {SearchBox} from '../components/SearchBox'

const baseUrl = 'https://api.themoviedb.org/3/search/movie'
const baseImgUrl = 'https://image.tmdb.org/t/p/w500'

function Movie() {
  const [searchKeyword,setSearchKeyword] = useState()
  const[movieData,setMovieData] = useState([]) 
  const fetchMovieData = () => axios.get(baseUrl,
      {params:{
          api_key:apiKey,
          page:1,
          query: searchKeyword
      }}).then (({data}) => setMovieData(data?.results))
         .catch ((err) => console.log('err'))
      
      useEffect(() => fetchMovieData(),[searchKeyword]) // bos bir liste gonderdigimizde didmount oldugunda 
      //yani sadece render edildiginde calisiyor. ama liste icersine bir degisken gonderdigimizde o degisken her degistiginde calisr

  return (
    <div className="App">
      <SearchBox setSearchKeyword = {setSearchKeyword}/>
      <CardList movieData = {movieData} baseImgUrl = {baseImgUrl}/>
    </div>
  );
}

export default Movie;
