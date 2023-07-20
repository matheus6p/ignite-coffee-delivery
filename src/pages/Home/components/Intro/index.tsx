import coffee from "../../../../assets/Imagem.svg"
import { Items } from "./Items";
import { IntroContainer } from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1 className="title-xl">Encontre o café perfeito para qualquer hora do dia</h1>
        <div className="text-l">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</div>
        <Items />
      </div>
      <img src={coffee} alt="" />
    </IntroContainer>
  )
}