import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1400px;
  margin: auto;
  padding: 2rem 10rem;
  .title-xl { color: ${props => props.theme['gray-900']}; margin-bottom: 1rem;}

  .text-l { color: ${props => props.theme['gray-800']}; margin-bottom: 4.125rem}

  display: flex;
  justify-content: space-between;
`