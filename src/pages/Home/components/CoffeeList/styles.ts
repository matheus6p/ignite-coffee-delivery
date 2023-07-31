import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  
  .title-l {
    color: ${(props) => props.theme["gray-900"]};
    margin-bottom: 54px;
  }
`