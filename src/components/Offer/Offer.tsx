import { SingleOffer } from "./SingleOffer";
import { OffersContainer, TextAboutOffer } from "./styled";
import Img57 from "../../assets/img16.jpg";
import Img6 from "../../assets/image00006.jpeg";
import Img28 from "../../assets/image00008.jpeg";
import Img51 from "../../assets/img10.jpg";

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
          offerImage={Img57}
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
          offerImage={Img51}
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
