import { MainHeading } from "../Layout/styled";
import { SingleOffer } from "./SingleOffer";
import { OffersContainer } from "./styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";

export const Offer = () => {
  return (
    <>
      <MainHeading>Oferta</MainHeading>
      {/* <SoonOffers>Po więcej szczegółów zapraszamy juz wkrótce!</SoonOffers> */}
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
