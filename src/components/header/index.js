import * as Styled from './styles';
import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import Input from "./Input";
import Button from "./Button";

const Header = () => {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    
    <header>
      <Styled.Container>
        <Input
          type="text"
          placeholder="Digite o nome de usuário para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <Button onClick={submitGetUser}/>
      </Styled.Container>
    </header>
  );
};

export default Header;