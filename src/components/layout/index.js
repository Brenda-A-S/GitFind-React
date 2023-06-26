import * as Styled from './styles';

import React from 'react'
import Header from '../header'

function index({children}) {
  return (
    <Styled.Container>
      <Header />
      {children}
    </Styled.Container>
  );
}

export default index