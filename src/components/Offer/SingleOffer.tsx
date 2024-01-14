import { OfferText, SingleOfferOfFundation } from "./styled";

type Props = {
  side: string;
  offerText: string;
  OfferImage: React.ComponentType<{ side: string }>;
};

export const SingleOffer = ({ side, offerText, OfferImage }: Props) => {
  return (
    <SingleOfferOfFundation>
      <OfferText side={side}>{offerText}</OfferText>
      <OfferImage side={side}></OfferImage>
    </SingleOfferOfFundation>
  );
};
