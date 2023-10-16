import { MainHeading } from "../Layout/styled";
import {
  AboutFundationContainer,
  AboutFundationImg,
  TextWithBackground,
} from "./styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";

export const AboutFundation = () => {
  return (
    <>
      <MainHeading>O Fundacji</MainHeading>
      <AboutFundationContainer>
        <TextWithBackground>
          Fundacja Młyn Zyzaków została założona przez Magdę Bielawską 16
          grudnia 2021 r. w Żywcu. Siedzibą Fundacji jest miejscowość Żywiec w
          województwie Śląskim. Głównym celem Fundacji jest zachowanie Młyna
          Zyzaków jako miejsca historycznego i nadanie mu nowej funkcji,
          osobliwości we współczesnym świecie oraz uczynienie z niego formy
          aktywizatora nadającego wartość sppołecznej tkance miasta. Więcej
          informacji dotyczących celów Fundacji można znaleźć w Statucie
          Fundacji (do pobrania w udostępnionym pliku poniżej).
        </TextWithBackground>
        <AboutFundationImg src={ImgOfMlyn}></AboutFundationImg>
      </AboutFundationContainer>
    </>
  );
};
