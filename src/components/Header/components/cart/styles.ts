import styled from 'styled-components'

export const CartContainer = styled.div`
  border-radius: 6px;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  position: relative;
  background: ${(props) => props.theme['yellow-light']};
  transition: .2s;
`

export const CartCount = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -8.345px;
  top: -8px;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 130;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white}
`