import React from "react";
import {StyledCardWrapper,StyledText, StyledMovieImage} from './Card.style'

export const Card = ({title,imgSrc}) => {
  return (
  <StyledCardWrapper>
    {imgSrc ?
        <StyledMovieImage src = {imgSrc} alt = 'keine img'/>
            : 'No Image'} 
            {/* TODO: buraya default bir resim ekleyelim */}
      <StyledText>{title}</StyledText>
  </StyledCardWrapper>
     )
};

