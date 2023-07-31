import { styled } from "styled-components";

export const Card = styled.div`
  max-width: calc(25% - 2rem);
  padding: 0 20px 20px 20px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem 2.25rem;
  background: var(--base-card, #f3f2f2);
  flex-shrink: 0;

  .card_img_container {
    width: 100%;
    margin-top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card_tag {
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 0.5rem;
    font-weight: 700;
    border-radius: 100px;
  }

  .card_tag-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .card_description {
    color: ${(props) => props.theme["gray-600"]};
    text-align: center;
  }

  .card_buy {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card_buy-price {
    color: ${(props) => props.theme["gray-700"]};
    font-weight: 800;
  }

  .card_buy-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card_buy-actions_count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme["gray-400"]};
  }

  .minus_button, .plus_button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`;

export const CartButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  transition: .2s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }

`