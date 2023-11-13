import { styled } from "@mui/material";

type Props = {
  side: string;
};

export const TextAboutOffer = styled("div")((props) => ({
  paddingLeft: "5vw",
  paddingRight: 100,
  paddingBottom: 90,
  paddingTop: 15,
  fontSize: 20,
  color: "#5E503F",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    paddingRight: "5vw",
    fontSize: 15,
  },
}));

export const OffersContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: 60,
});

export const SingleOfferOfFundation = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "5vw",
  paddingRight: "5vw",
});

export const OfferText = styled("span")<Props>(({ side, theme }) => ({
  order: side === "left" ? 0 : 1,
  borderBottom: "1px solid #5E503F",
  color: "#5E503F",
  width: "100vw",
  paddingLeft: side === "left" ? 15 : "auto",
  fontSize: 30,
  display: "flex",
  justifyContent: side === "left" ? "left" : "right",
  [theme.breakpoints.down(850)]: {
    fontSize: 20,
  },
  [theme.breakpoints.down(775)]: {
    width: "50vh",
    paddingBottom: 10,
    paddingTop: 10,
  },
  [theme.breakpoints.down(540)]: {
    fontSize: 15,
  },
  [theme.breakpoints.down(400)]: {
    width: "35vh",
    fontSize: 10,
  },
}));

export const OfferImg = styled("img")<Props>(({ side, theme }) => ({
  order: side === "left" ? 1 : 0,
  borderRadius: 47,
  zIndex: 2,
  height: "10%",
  width: "30%",
  [theme.breakpoints.down(850)]: {
    height: "10%",
    width: "40%",
  },
  [theme.breakpoints.down(775)]: {
    height: "10%",
    width: "30%",
  },
}));
