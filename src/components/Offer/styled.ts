import { styled } from "@mui/material";

type Props = {
  side: string;
};

export const TextAboutDonation = styled("div")((props) => ({
  paddingLeft: 100,
  paddingRight: 100,
  paddingBottom: 30,
  fontSize: 20,
  color: "#5E503F",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));

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
  paddingLeft: "5%",
  paddingRight: "5%",
});

export const OfferText = styled("span")<Props>(({ side, theme }) => ({
  order: side === "left" ? 0 : 1,
  backgroundColor: "#5E503F",
  borderRadius: 47,
  color: "white",
  width: "100vh",
  paddingBottom: 20,
  paddingTop: 20,
  paddingLeft: side === "left" ? 20 : "auto",
  paddingRight: side === "left" ? "auto" : 20,
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
  transform: side === "left" ? "translate(-35px, 0)" : "translate(35px, 0)",
  borderRadius: 47,
  zIndex: 2,
  height: "10%",
  width: "30%",
  marginBottom: 30,
  [theme.breakpoints.down(850)]: {
    height: "10%",
    width: "40%",
  },
  [theme.breakpoints.down(775)]: {
    height: "10%",
    width: "30%",
  },
}));
