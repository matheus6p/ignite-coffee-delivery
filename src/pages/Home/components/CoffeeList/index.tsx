import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <div>
      <h1 className="title-l">Nossos Cafés</h1>
      <CoffeeListContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContainer>
    </div>
  )
}