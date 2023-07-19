import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${props => props.theme.purple};

  cursor: pointer

`