

import {Card} from '../Card'
import {StyledCardList} from './CardList.style'


export const CardList = ({movieData,baseImgUrl}) => {


    return(
        <StyledCardList>

            {movieData?.map((movie,i) => {
                return <Card 
                key = {i} 
                title = {movie.title}
                imgSrc = {movie.poster_path && baseImgUrl + movie.poster_path }
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