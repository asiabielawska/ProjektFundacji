import { SingleOffer } from "./SingleOffer";
import { OffersContainer, TextAboutOffer } from "./styled";
import Img32 from "../../assets/image00032.jpeg";
import Img6 from "../../assets/image00006.jpeg";
import Img28 from "../../assets/image00028.jpeg";
import Img7 from "../../assets/image00007.jpeg";

export const Offer = () => {
  return (
    <>
      <OffersContainer>
        <TextAboutOffer>
          Poniżej przedstawiamy przykładowe formy współpracy mogące odbyć się na
          terenie naszej Fundacji. W celu uzyskania większej ilości informacji
          zapraszamy do kontaktu!
        </TextAboutOffer>
        <SingleOffer
          side="left"
          offerText="Miejsce do sesji fotograficznych"
          offerImage={Img32}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Organizacja wydarzeń"
          offerImage={Img6}
        ></SingleOffer>
        <SingleOffer
          side="left"
          offerText="Organizacja warsztatów"
          offerImage={Img28}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Wycieczki - grupowe i indywidualne"
          offerImage={Img7}
        ></SingleOffer>
      </OffersContainer>
      <TextAboutOffer>
        Darowizny związane z każdą z ofert nie stanowią formy wynagrodzenia
        pracowników oraz członków zarządu fundacji, są przekazywane tylko i
        wyłącznie na cele statutowe fundacji.
      </TextAboutOffer>
    </>
  );
};
