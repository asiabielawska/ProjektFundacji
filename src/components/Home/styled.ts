import { Button, styled } from "@mui/material";
import img from "../../assets/img5.jpg";

export const BackgroundImg = styled("div")({
  backgroundImage: `url(\"${img}\")`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const HomeAllContent = styled("div")((props) => ({
  color: "white",
  paddingTop: "25%",
  paddingLeft: "7vw",
  paddingRight: "5vw",
  [props.theme.breakpoints.down(600)]: {
    paddingTop: "30%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "5%",
  },
  ["@media(orientation: landscape)"]: {
    paddingTop: "15%",
  },
}));

export const HomeHeading = styled("h1")((props) => ({
  fontSize: 50,
  marginBottom: 5,
  [props.theme.breakpoints.down(720)]: {
    fontSize: 35,
    marginBottom: 10,
  },
  [props.theme.breakpoints.down(320)]: {
    fontSize: 30,
  },
}));

export const HomeText = styled("div")((props) => ({
  fontSize: 30,
  marginBottom: 50,
  [props.theme.breakpoints.down(720)]: {
    fontSize: 20,
  },
  [props.theme.breakpoints.down(320)]: {
    fontSize: 15,
  },
}));

export const ButtonFindMore = styled(Button)((props) => ({
  backgroundColor: "gray",
  textTransform: "none",
  fontSize: 22,
  paddingLeft: 40,
  paddingRight: 40,
  ":hover": {
    backgroundColor: "darkgray",
  },
  [props.theme.breakpoints.down(720)]: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "60%",
    fontSize: 15,
  },
  [props.theme.breakpoints.down(940)]: {
    ["@media(orientation: landscape)"]: {
      display: "none",
    },
  },
}));
