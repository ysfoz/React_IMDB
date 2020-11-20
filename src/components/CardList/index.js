import axios from 'axios'
import { useEffect, useState } from 'react'

import {Card} from '../Card'
import {apiKey} from '../ApiKey'
import {StyledCardList} from './CardList.style'

const baseUrl = 'https://api.themoviedb.org/3/search/movie'
const baseImgUrl = 'https://image.tmdb.org/t/p/w500'
export const CardList = () => {
const[movieData,setMovieData] = useState([]) 
const fetchMovieData = () => axios.get(baseUrl,
    {params:{
        api_key:apiKey,
        page:1,
        query:'Star Wars'
    }}).then (({data}) => setMovieData(data?.results))
       .catch ((err) => console.log('err'))
    
    useEffect(() => fetchMovieData(),[])

    return(
        <StyledCardList>

            {movieData?.map((movie,i) => {
                return <Card 
                key = {i} 
                title = {movie.title}
                imgSrc = {baseImgUrl + movie.poster_path}
                />
            })}
                
         </StyledCardList>
        
    )
}

// 1- useeffect - axios veriyi al
// 2- hangi parametrelere ulasilaca belirle
// zorunlu olan parametreleri gir
// aldigin verileri useState ile sakla
// props lar vasitasiyla bu verileri paylas