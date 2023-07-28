import { CoffeeCardContainer, Card } from "./styles";
import expresso from "../../../../../../assets/products/expresso.svg"
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <Card>
        <img src={expresso} alt="" />
        <div>Tradicional</div>
        <div>Expresso tradicional</div>
        <div>O tradicional café feito com água quente e grãos moídos</div>
        <div>
          <div className="price">R$ 9,90</div>
          <div>
            <span>-</span>
            <div>1</div>
            <span>+</span>
            <div>
              <ShoppingCart size={22} weight="fill" />
            </div>
          </div>
        </div>
      </Card>
    </CoffeeCardContainer>
  )
}