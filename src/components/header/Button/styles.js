import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #225ed8;
    border: 1px solid #FAFAFA;
    border-radius: 30px;
    min-width: 200px;
    height: 50px;
    padding: 16px;
    cursor: pointer;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
`