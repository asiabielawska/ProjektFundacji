import { styled } from "@mui/material";

export const Heading = styled("h1")({
  fontSize: 40,
  color: "#5e503f",
  paddingBottom: 30,
});

export const Container = styled("div")((props) => ({
  display: "flex",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  marginBottom: 50,
  marginTop: 40,
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const TextContainer = styled("div")({
  color: "#5E503F",
  fontSize: 20,
  flex: 2,
  marginTop: 70,
});

export const SecondaryHeading = styled("h3")({
  color: "#5e503f",
});

export const Text = styled("div")({
  fontSize: 18,
  textAlign: "justify",
  paddingTop: 5,
  hyphens: "auto",
});

export const ImgContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  paddingLeft: 100,
  marginTop: 60,
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "row",
    paddingLeft: 0,
    justifyContent: "space-between",
  },
}));

export const ImgOne = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, 30px)",
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
  [props.theme.breakpoints.down(600)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
    borderRadius: 0,
  },
}));

export const ImgTwo = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(130px, 0)",
  zIndex: 1,
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
  [props.theme.breakpoints.down(600)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
    borderRadius: 0,
  },
}));

export const ImgThree = styled("img")((props) => ({
  width: "55%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, -30px)",
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
  },
  [props.theme.breakpoints.down(600)]: {
    transform: "translate(0px, 0px)",
    width: "30%",
    borderRadius: 0,
  },
}));
