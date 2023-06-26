import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 24px 48px;
`;

export const ProfileInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: #A3A3A3;
  }

  h4{
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ProfileStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const ProfileUserGenerics = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #306893;
    font-weight: 500;
    text-decoration: none;
    &:hover{
      opacity: .7;
    }
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;