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

export const All = styled("div")((props) => ({
  display: "flex",
  marginBottom: "10vh",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const Container = styled("div")({
  paddingLeft: "5vw",
  paddingRight: "2vw",
});

export const AllText = styled("div")((props) => ({
  color: "#5E503F",
  fontSize: 20,
  [props.theme.breakpoints.down(620)]: {
    fontSize: 15,
  },
}));

export const Element = styled("div")({
  borderBottom: "1px solid #5E503F",
  paddingTop: 30,
});

export const Img = styled("img")((props) => ({
  width: "30%",
  borderRadius: 47,
  marginRight: "5vw",
  flex: 1,
  [props.theme.breakpoints.down(1003)]: {
    width: "100%",
    marginTop: 30,
    borderRadius: 0,
  },
}));
