import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  + div {
    margin-top: 1.25rem;
  }
`

export const Item = styled.div`
  width: 18.375rem;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;
`

export const Icon = styled.div`

  background: ${({ color }) => color};
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50%;
`;