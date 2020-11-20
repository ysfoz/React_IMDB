import React from "react";
import {StyledCardWrapper,StyledText, StyledMovieImage} from './Card.style'

export const Card = ({title,imgSrc}) => {
  return (
  <StyledCardWrapper>
      <StyledMovieImage src = {imgSrc} alt = 'keine img'/>
      <StyledText>{title}</StyledText>
  </StyledCardWrapper>
     )
};

