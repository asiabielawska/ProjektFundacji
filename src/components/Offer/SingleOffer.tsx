import { OfferImg, OfferText, SingleOfferOfFundation } from "./styled";

type Props = {
  side: string;
  offerText: string;
  offerImage: string;
};

export const SingleOffer = ({ side, offerText, offerImage }: Props) => {
  return (
    <SingleOfferOfFundation>
      <OfferText side={side}>{offerText}</OfferText>
      <OfferImg src={offerImage} side={side}></OfferImg>
    </SingleOfferOfFundation>
  );
};
