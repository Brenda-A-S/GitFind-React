import React from 'react'
import * as Styled from './styles'

function NoSearch({onClick}) {
  return (
    <Styled.NoSearchContainer onClick={onClick}>
      <h2>Nenhum usuário pesquisado.</h2>
    </Styled.NoSearchContainer>
  )
}

export default NoSearch