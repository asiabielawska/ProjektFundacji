import { SingleOffer } from "./SingleOffer";
import {
  Events,
  OffersContainer,
  PhotoSession,
  TextAboutOffer,
  Trip,
  Workshops,
} from "./styled";

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
          OfferImage={PhotoSession}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Organizacja wydarzeń"
          OfferImage={Events}
        ></SingleOffer>
        <SingleOffer
          side="left"
          offerText="Organizacja warsztatów"
          OfferImage={Workshops}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Wycieczki - grupowe i indywidualne"
          OfferImage={Trip}
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
