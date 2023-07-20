import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ItemContainer, Icon, Item, Row } from "./styles";
import { defaultTheme } from "../../../../../styles/themes/default";

export function Items() {
  return (
    <ItemContainer>
        <Row>
          <Item>
            <Icon color={defaultTheme["yellow-dark"]}>
              <ShoppingCart color="#fff" weight="fill" size={16} />
            </Icon>
            <div className="text-m">Compra simples e segura</div>
          </Item>
          <Item>
            <Icon color={defaultTheme["gray-700"]}>
              <Package color="#fff" weight="fill" size={16} />
            </Icon>
            <div className="text-m">Embalagem mantém o café intacto</div>
          </Item>
        </Row>

        <Row>
          <Item>
            <Icon color={defaultTheme["yellow"]}>
              <Timer color="#fff" weight="fill" size={16} />
            </Icon>
            <div className="text-m">Entrega rápida e rastreada</div>
          </Item>
          
          <Item>
            <Icon color={defaultTheme["purple"]}>
              <Coffee color="#fff" weight="fill" size={16} />
            </Icon>
            <div className="text-m">O café chega fresquinho até você</div>
          </Item>
        </Row>
    </ItemContainer>
  )
}