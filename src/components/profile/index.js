import React from 'react'
import useGithub from "../../hooks/github-hooks";
import * as Styled from './styles';

function Profile({onClick}) {

  const { githubState } = useGithub();

  return (
    <Styled.ProfileContainer onClick={onClick}>

      <Styled.ProfileImage src={githubState.user.avatar} alt="Foto do usuário" />

      <Styled.ProfileInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <Styled.ProfileUserGenerics>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </Styled.ProfileUserGenerics>

          <Styled.ProfileUserGenerics>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </Styled.ProfileUserGenerics>
          <Styled.ProfileUserGenerics>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </Styled.ProfileUserGenerics>
        </div>
        <Styled.ProfileStatusCount>
          
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>

          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
          
        </Styled.ProfileStatusCount>

      </Styled.ProfileInfoUser>

    </Styled.ProfileContainer>
  )
}

export default Profile