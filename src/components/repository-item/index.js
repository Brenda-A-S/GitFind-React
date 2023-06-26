import React from "react";
import * as Styled from "./styles";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <Styled.RepoContainer>
      <Styled.RepoTitle>{name}</Styled.RepoTitle>
      <Styled.RepoFullName>full name:</Styled.RepoFullName>
      <Styled.RepoLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </Styled.RepoLink>
    </Styled.RepoContainer>
  );
};

export default RepositoryItem;