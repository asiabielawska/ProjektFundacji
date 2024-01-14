import { styled } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";

type Props = {
  side: string;
};

export const TextAboutOffer = styled("div")((props) => ({
  marginLeft: "5vw",
  marginRight: "5vw",
  marginBottom: 90,
  paddingTop: 15,
  paddingBottom: 15,
  fontSize: 25,
  color: "#5E503F",
  textAlign: "justify",
  borderBottom: "1px solid #5E503F",
  marginTop: 130,
  [props.theme.breakpoints.down(1003)]: {
    paddingRight: "5vw",
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 100,
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
  paddingLeft: side === "left" ? 15 : 5,
  paddingRight: side === "left" ? 5 : 15,
  fontSize: 30,
  display: "flex",
  textAlign: side === "left" ? "left" : "right",
  justifyContent: side === "left" ? "left" : "right",
  [theme.breakpoints.down(850)]: {
    fontSize: 20,
  },
  [theme.breakpoints.down(775)]: {
    width: "50vh",
  },
  [theme.breakpoints.down(540)]: {
    marginBottom: 20,
    marginTop: 20,
  },
  [theme.breakpoints.down(400)]: {
    width: "35vh",
    fontSize: 15,
  },
}));

export const PhotoSession = styled(PhotoCameraIcon)<Props>(
  ({ side, theme }) => ({
    order: side === "left" ? 1 : 0,
    zIndex: 2,
    color: "#EAE0D5",
    height: "10%",
    width: "20%",
    [theme.breakpoints.down(850)]: {
      width: "40%",
      marginBottom: 20,
      marginTop: 20,
    },
  })
);

export const Events = styled(EventIcon)<Props>(({ side, theme }) => ({
  order: side === "left" ? 1 : 0,
  zIndex: 2,
  // color: "#A63D40",
  color: "#5E0B15",
  fontSize: 200,
  height: "10%",
  width: "20%",
  [theme.breakpoints.down(850)]: {
    width: "40%",
    marginBottom: 20,
    marginTop: 20,
  },
}));

export const Workshops = styled(ColorLensIcon)<Props>(({ side, theme }) => ({
  order: side === "left" ? 1 : 0,
  zIndex: 2,
  color: "#5E503F",
  fontSize: 200,
  height: "10%",
  width: "20%",
  [theme.breakpoints.down(850)]: {
    width: "40%",
    marginBottom: 20,
    marginTop: 20,
  },
}));

export const Trip = styled(GroupIcon)<Props>(({ side, theme }) => ({
  order: side === "left" ? 1 : 0,
  zIndex: 2,
  // color: "#8C7A6B",
  color: "#A63D40",
  fontSize: 200,
  height: "10%",
  width: "20%",
  [theme.breakpoints.down(850)]: {
    width: "40%",
    marginBottom: 20,
    marginTop: 20,
  },
}));
