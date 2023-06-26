import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as Styled from "./styles";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <Styled.RepoTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <Styled.RepoTabList>
            <Styled.RepoTab>Repositories</Styled.RepoTab>
            <Styled.RepoTab>Starred</Styled.RepoTab>
          </Styled.RepoTabList>

          <Styled.RepoTabPanel>

            {/* owner repos */}
            <Styled.RepoList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </Styled.RepoList>
          </Styled.RepoTabPanel>

              {/* favoritado */}
          <Styled.RepoTabPanel>
            <Styled.RepoList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </Styled.RepoList>
          </Styled.RepoTabPanel>
        </Styled.RepoTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;