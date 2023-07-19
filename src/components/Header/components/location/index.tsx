import { MapPin } from "phosphor-react";
import { LocationContainer } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";

export function Location() {
  return (
    <LocationContainer>
      <MapPin size={22} color={defaultTheme.purple} weight="fill" />
      Sorocaba, SP
    </LocationContainer>
  )
}