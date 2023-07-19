import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    background: ${props => props.theme["yellow-dark"]};
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 50%;
  }
`;