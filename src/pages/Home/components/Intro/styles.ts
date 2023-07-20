import styled from "styled-components";

export const IntroContainer = styled.div`
  padding: 5.5rem 0;

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
