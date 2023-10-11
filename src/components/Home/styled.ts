import { Button, styled } from "@mui/material";
import img from "../../assets/młynmain.jpeg";

export const BackgroundImg = styled("div")({
  backgroundImage: `url(\"${img}\")`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: 0.8,
});

export const HomeAllContent = styled("div")({
  color: "white",
  paddingTop: 250,
  paddingLeft: 100,
});

export const HomeHeading = styled("h1")({
  fontSize: 40,
});

export const HomeText = styled("div")({
  fontSize: 20,
  marginTop: 25,
  marginBottom: 25,
});

export const ButtonFindMore = styled(Button)({
  backgroundColor: "gray",
  textTransform: "none",
});
