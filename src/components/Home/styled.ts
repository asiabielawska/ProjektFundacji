import { Button, styled } from "@mui/material";
import img from "../../assets/image00001.jpeg";

export const BackgroundImg = styled("div")({
  backgroundImage: `url(\"${img}\")`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const HomeAllContent = styled("div")((props) => ({
  color: "white",
  paddingTop: 250,
  paddingLeft: 100,
  ["@media(orientation: landscape)"]: {
    paddingTop: "10%",
  },
  [props.theme.breakpoints.down(800)]: {
    paddingTop: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  [props.theme.breakpoints.down(600)]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "5%",
    paddingTop: 150,
  },
}));

export const HomeHeading = styled("h1")((props) => ({
  fontSize: 50,
  marginBottom: 5,
  [props.theme.breakpoints.down(600)]: {
    fontSize: 30,
    marginBottom: 10,
  },
}));

export const HomeText = styled("div")((props) => ({
  fontSize: 30,
  marginBottom: 50,
  [props.theme.breakpoints.down(780)]: {
    fontSize: 20,
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
  [props.theme.breakpoints.down(780)]: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "60%",
    fontSize: 15,
  },
}));
