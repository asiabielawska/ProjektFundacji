import { styled } from "@mui/material";

export const Heading = styled("h1")((props) => ({
  paddingTop: 130,
  paddingLeft: "5vw",
  paddingBottom: 30,
  color: "#5e503f",
  fontSize: 40,
  margin: 0,
  [props.theme.breakpoints.down(1003)]: {
    paddingRight: "5vw",
  },
}));

export const Content = styled("div")((props) => ({
  display: "flex",
  marginBottom: "10vh",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const TextAndMap = styled("div")({
  display: "flex",
  flex: 2,
  flexDirection: "column",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  justifyContent: "space-between",
});

export const Text = styled("div")((props) => ({
  color: "#5E503F",
  fontSize: 20,
  paddingTop: "2%",
  paddingBottom: 30,
  [props.theme.breakpoints.down(1003)]: {
    paddingTop: 10,
    paddingBottom: 50,
    fontSize: 15,
  },
  [props.theme.breakpoints.down(620)]: {
    fontSize: 15,
  },
}));

export const SingleText = styled("div")({
  borderBottom: "1px solid #5E503F",
  paddingTop: 30,
});

export const Img = styled("img")((props) => ({
  width: "30%",
  marginRight: "5vw",
  flex: 1,
  [props.theme.breakpoints.down(1003)]: {
    width: "100%",
    marginTop: 30,
  },
}));
