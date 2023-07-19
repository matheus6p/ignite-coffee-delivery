import { ShoppingCart } from "phosphor-react";
import { CartContainer, CartCount } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={22} color={defaultTheme["yellow-dark"]} weight="fill" />
      <CartCount>3</CartCount>
    </CartContainer>
  )
}