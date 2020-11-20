import { useState } from 'react'
import { StyledSearchBox,StyledSearchInput, StyledSearchButton } from './SearchBox.style'


export const SearchBox = ({setSearchKeyword}) =>{
const [inputValue, setInputValue] = useState('')
    return(
        <StyledSearchBox>
            {/* onChange metodunda bir event doner, bunun icerisinde target adinda bir property var , bizim girdigimiz
            degerler burada tutuluyor. o yuzden e.target.value olrak yazdik */}
            <StyledSearchInput color = 'blue' onChange = {(e) => setInputValue(e.target.value)}/>
            <StyledSearchButton  onClick = {() =>{setSearchKeyword(inputValue)}} isColored ={false} >Search</StyledSearchButton>
           
        </StyledSearchBox>
       
    )
}