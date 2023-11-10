import { styled } from "@mui/material";

export const AboutFundationContainer = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  padding: "5vw",
  paddingBottom: "10vh",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const TextWithBackground = styled("span")((props) => ({
  borderRadius: 47,
  color: "#5E503F",
  paddingRight: 40,
  fontSize: 20,
  width: "40%",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    width: "95%",
    fontSize: 15,
    paddingRight: 0,
  },
}));

export const AboutFundationImg = styled("img")((props) => ({
  width: "50%",
  height: "80%",
  borderRadius: 47,
  [props.theme.breakpoints.down(1003)]: {
    width: "40%",
    marginTop: 10,
  },
  [props.theme.breakpoints.down(620)]: {
    width: "100%",
    marginTop: 10,
  },
}));

export const Statute = styled("a")({
  color: "#5E503F",
  fontSize: 22,
});
