import React from 'react'

import { InputContainer } from './styles';

function Input({onChange, type, placeholder}) {
  return (
    <InputContainer>
        <input onChange={onChange} type={type} placeholder={placeholder}/>
    </InputContainer>
  )
}

export default Input