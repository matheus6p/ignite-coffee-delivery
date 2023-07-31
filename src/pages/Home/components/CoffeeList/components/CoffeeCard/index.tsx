import { Card, CartButton } from "./styles";
import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { defaultTheme } from "../../../../../../styles/themes/default";
import expresso from "../../../../../../assets/products/expresso.svg"

export function CoffeeCard() {
  return (
      <Card>
        <div className="card_img_container"><img src={expresso} alt="" className="card_img" /></div>
        <div className="card_tag-container">
          <div className="card_tag">Tradicional</div>
          {/* <div className="card_tag">Com Leite</div> */}
          {/* <div className="card_tag">Gelado</div> */}
        </div>
        <div className="card_title title-s">Expresso tradicional</div>
        <div className="card_description text-s">O tradicional café feito com água quente e grãos moídos</div>
        <div className="card_buy">
          <div className="card_buy-price ">R$ <span className="title-m">9,90</span></div>
          <div className="card_buy-actions">
            <div className="card_buy-actions_count text-m">
              <button className="minus_button">
                <Minus color={defaultTheme.purple} weight="bold" />
              </button>
              <span>1</span>
              <button className="plus_button">
                <Plus color={defaultTheme.purple} weight="bold" />
              </button>
            </div>
            <CartButton>
              <ShoppingCart size={22} weight="fill" color="white" />
            </CartButton>
          </div>
        </div>
      </Card>
  )
}