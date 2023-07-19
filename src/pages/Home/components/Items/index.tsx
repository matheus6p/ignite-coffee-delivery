import { ShoppingCart } from "phosphor-react";
import { ItemContainer, Icon } from "./styles";

export function Items() {
  return (
    <ItemContainer>
      <Icon>
        <div className="icon">
          <ShoppingCart color="#fff" weight="fill" size={16} />
        </div>
        <div className="text-m">Compra simples e segura</div>
      </Icon>
      
    </ItemContainer>
  )
}