import { styled } from "@mui/material";

export const HistoryContainer = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  marginBottom: 20,
  justifyContent: "space-around",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const HistoryTextContainer = styled("div")({
  color: "#5E503F",
  flex: 2,
});

export const SecondaryHeading = styled("h3")({
  color: "#312a21",
});

export const HistoryText = styled("div")({
  fontSize: 17,
  textAlign: "justify",
  paddingTop: 5,
});

export const HistoryImgContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  paddingLeft: 100,
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "row",
    paddingLeft: 0,
    marginTop: 20,
  },
}));

export const HistoryImgOne = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, 30px)",
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
}));

export const HistoryImgTwo = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(130px, 0)",
  zIndex: 1,
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
}));

export const HistoryImgThree = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, -30px)",
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
}));
