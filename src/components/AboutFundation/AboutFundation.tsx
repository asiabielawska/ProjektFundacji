import { Container, Img, Statute, Text } from "./styled";
import Img23 from "../../assets/image00023.jpeg";
import StatuteOfFundation from "../../assets/StatutFundacjaMlynZyzakow.pdf";

export const AboutFundation = () => {
  return (
    <>
      <Container>
        <Text>
          Fundacja Młyn Zyzaków została założona przez Magdę Bielawską 16
          grudnia 2021 r. w Żywcu. Siedzibą Fundacji jest miejscowość Żywiec w
          województwie śląskim. Głównym celem Fundacji jest zachowanie Młyna
          Zyzaków jako miejsca historycznego i nadanie mu nowej funkcji we
          współczesnym świecie oraz uczynienie z niego formy aktywizatora,
          nadającego wartość społecznej tkance miasta. Więcej informacji
          dotyczących celów Fundacji można znaleźć w Statucie Fundacji (do
          pobrania w udostępnionym pliku poniżej).
          <br />
          <br />
          <Statute href={StatuteOfFundation} download>
            Statut - Fundacja Młyn Zyzaków.pdf
          </Statute>
        </Text>
        <Img src={Img23}></Img>
      </Container>
    </>
  );
};
