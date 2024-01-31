import { Container, Img, Statute, Text } from "./styled";
import Img23 from "../../assets/image00023.jpeg";
import StatuteOfFundation from "../../assets/StatutFundacjaMlynZyzakow.pdf";

export const AboutFundation = () => {
  return (
    <>
      <Container>
        <Text>
          Fundacja Młyn Zyzaków została założona przez Magdę Bielawską
          16&nbsp;grudnia 2021&nbsp;r. w&nbsp;Żywcu. Siedzibą Fundacji jest
          miejscowość Żywiec w&nbsp;województwie śląskim.
          <br />
          Głównym celem Fundacji jest zachowanie Młyna Zyzaków jako miejsca
          historycznego i&nbsp;nadanie mu nowej funkcji we współczesnym świecie
          oraz uczynienie z&nbsp;niego formy aktywizatora, nadającego wartość
          społecznej tkance miasta.
          <br />
          Więcej informacji dotyczących celów Fundacji można znaleźć
          w&nbsp;Statucie Fundacji (do pobrania w udostępnionym pliku poniżej)
          oraz na naszym facebooku.
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
