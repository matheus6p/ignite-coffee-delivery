import { styled } from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  flex-shrink: 0;
  border-radius: 0.375rem 2.25rem;
  background: var(--base-card, #F3F2F2);
`