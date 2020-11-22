import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {apiKey} from '../components/ApiKey'
import { useParams } from 'react-router-dom' // router da path icerisinde id olarak belirttigimiz params a ulasabilmek icin bunu kullaniyoruz.
import {StyledMovieImage} from '../components/Card/Card.style'

const baseDetailUrl = 'https://api.themoviedb.org/3/movie/' //  add {movie_id}
const baseImgUrl = 'https://image.tmdb.org/t/p/w500'

function MovieDetails() {
    const [MovieDetails,setMovieDetails] =useState()
    const { id } = useParams();
    
    const fetchDetailData = () => axios.get(baseDetailUrl+id,
        {params:{
            api_key:apiKey,
        }}).then (res => setMovieDetails(res?.data))
           .catch ((err) => console.log('err'))
        
        useEffect(() => fetchDetailData(),[id])

    return (
        <div>
            <h1>{MovieDetails?.original_title}</h1>
            <h3>{MovieDetails?.overview}</h3>
            <StyledMovieImage src = {baseImgUrl+MovieDetails?.poster_path} alt = 'keine img'/>
        </div>
    )
}

export default MovieDetails
