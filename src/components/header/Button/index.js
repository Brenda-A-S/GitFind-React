import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick} type='submit'>
       <span>Buscar</span>
    </ButtonContainer>
  )
}

export default Button