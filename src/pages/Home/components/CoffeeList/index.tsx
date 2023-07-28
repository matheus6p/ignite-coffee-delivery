import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1 className="title-l">Nossos Cafés</h1>
      <CoffeeCard />
    </CoffeeListContainer>
  )
}