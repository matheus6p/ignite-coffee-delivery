import styled from "styled-components";

export const IntroContainer = styled.div`
  .title-xl {
    color: ${(props) => props.theme["gray-900"]};
    margin-bottom: 1rem;
  }

  .text-l {
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 4.125rem;
  }

  display: flex;
  justify-content: space-between;

  img {
    width: 100%;
  }
`;
