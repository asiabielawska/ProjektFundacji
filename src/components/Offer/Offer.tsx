import { MainHeading } from "../Layout/styled";
import { SingleOffer } from "./SingleOffer";
import { OffersContainer, TextAboutOffer } from "./styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";

export const Offer = () => {
  return (
    <>
      <MainHeading>Oferta</MainHeading>
      <TextAboutOffer>
        Wszelkie informacje dotyczące niżej wymienionych elementów oferty
        zamieszczane będą na bieżąco na profilu Fundacji (facebook).
      </TextAboutOffer>
      <OffersContainer>
        <SingleOffer
          side="left"
          offerText="Miejsce do sesji fotograficznych"
          offerImage={ImgOfMlyn}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Organizacja wydarzeń"
          offerImage={ImgOfMlyn}
        ></SingleOffer>
        <SingleOffer
          side="left"
          offerText="Warsztaty"
          offerImage={ImgOfMlyn}
        ></SingleOffer>
        <SingleOffer
          side="right"
          offerText="Wycieczki - grupowe i indywidualne"
          offerImage={ImgOfMlyn}
        ></SingleOffer>
      </OffersContainer>
      <TextAboutOffer>
        Darowizny związane z kadą z ofert nie stanowią formy wynagrodzenia
        pracowników oraz członków zarządu fundacji. Pieniądze z wszelkiego
        rodzaju wydarzeń i sesji są przekazywane tylko i wyłącznie na cele
        statutowe fundacji.
      </TextAboutOffer>
    </>
  );
};
