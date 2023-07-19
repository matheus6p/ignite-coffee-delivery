
import { HeaderContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />
      <nav>
        <NavLink to="/" title="Carrinho">
          Carrinho
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}