import React from "react";
import {StyledCardWrapper,StyledText, StyledMovieImage} from './Card.style'
import { useHistory } from 'react-router-dom'

export const Card = ({title,imgSrc,id}) => {

  const history = useHistory();

  return (
  <StyledCardWrapper onClick ={() => history.push(`/detail/${id}`)}>
    {imgSrc ?
        <StyledMovieImage src = {imgSrc} alt = 'keine img'/>
            : 'No Image'} 
            {/* TODO: buraya default bir resim ekleyelim */}
      <StyledText>{title}</StyledText>
  </StyledCardWrapper>
     )
};

