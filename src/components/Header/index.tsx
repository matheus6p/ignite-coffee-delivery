import { HeaderContainer } from "./styles.ts";
import Logo from '../../assets/Logo.svg'
import { Cart } from "./components/cart/index.tsx";
import { Location } from "./components/location/index.tsx";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
          <Location />
          <Cart />
      </nav>

    </HeaderContainer>
  )
}