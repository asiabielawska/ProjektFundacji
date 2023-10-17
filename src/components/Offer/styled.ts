import { styled } from "@mui/material";

type Props = {
  side: string;
};

export const SoonOffers = styled("div")({
  height: "100vh",
  width: "100vw",
  padding: 100,
  fontSize: 40,
  color: "#5E503F",
});

export const OffersContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const SingleOfferOfFundation = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const OfferText = styled("span")(({ side }: Props) => ({
  order: side === "left" ? 0 : 1,
  transform: side === "left" ? "translate(55px, 0)" : "translate(-130px, 0)",
  backgroundColor: "#5E503F",
  borderRadius: 47,
  color: "white",
  paddingBottom: 20,
  paddingTop: 20,
  paddingRight: side === "left" ? 60 : 20,
  paddingLeft: side === "left" ? 20 : 150,
  fontSize: 30,
  width: "50%",
}));

export const OfferImg = styled("img")(({ side }: Props) => ({
  order: side === "left" ? 1 : 0,
  borderRadius: 47,
  zIndex: 2,
  height: "10%",
  width: "30%",
  marginBottom: 30,
}));
