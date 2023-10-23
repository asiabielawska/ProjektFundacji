import { styled } from "@mui/material";

export const AboutFundationContainer = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  padding: "5vh",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const TextWithBackground = styled("span")((props) => ({
  backgroundColor: "#5E503F",
  borderRadius: 47,
  color: "white",
  padding: 20,
  transform: "translate(55px, 0)",
  width: "40%",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    transform: "translate(0, 0)",
    width: "95%",
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
  color: "white",
  fontSize: 18,
  ":active": {
    color: "white",
  },
});
