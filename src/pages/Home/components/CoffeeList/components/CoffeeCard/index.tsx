import { useContext } from "react";
import { Card, CartButton } from "./styles";
import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { defaultTheme } from "../../../../../../styles/themes/default";
import { ProductContext } from "../../../../../../context/ProductsContext";

export function CoffeeCard() {
  const { products } = useContext(ProductContext);
  return (
    products.map(product => {
      return (
        <Card key={product.id}>
          <div className="card_img_container">
            <img src={product.url_img} alt="" className="card_img" />
          </div>
          <div className="card_tag-container">
            {product.category.map(cat => (
              <div key={cat} className="card_tag">
                {cat}
              </div>
            ))}
          </div>
          <div className="card_title title-s">{product.beverage}</div>
          <div className="card_description text-s">{product.description}</div>
          <div className="card_buy">
            <div className="card_buy-price ">
              R$ <span className="title-m">{product.price}</span>
            </div>
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
      );
    })
  );
}
