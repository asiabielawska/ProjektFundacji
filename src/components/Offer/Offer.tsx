import { MainHeading } from "../Layout/styled";
import { SingleOffer } from "./SingleOffer";
import { OffersContainer, TextAboutDonation } from "./styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";

export const Offer = () => {
  return (
    <>
      <MainHeading>Oferta</MainHeading>
      <TextAboutDonation>
        Darowizny związane z wydarzeniami lub sesjami nie stanowią formy
        wynagrodzenia pracowników oraz członków zarządu fundacji. Pieniądze z
        wszelkiego rodzaju wydarzeń i sesji są przekazywane tylko i wyłącznie na
        cele statutowe fundacji.
      </TextAboutDonation>
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
      </OffersContainer>
    </>
  );
};
