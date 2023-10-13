import { Button, styled } from "@mui/material";
import img from "../../assets/młynmain2.jpg";

export const BackgroundImg = styled("div")({
  backgroundImage: `url(\"${img}\")`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const HomeAllContent = styled("div")({
  color: "white",
  paddingTop: 250,
  paddingLeft: 100,
});

export const HomeHeading = styled("h1")({
  fontSize: 50,
  marginBottom: 5,
});

export const HomeText = styled("div")({
  fontSize: 30,
  marginBottom: 50,
  width: 550,
});

export const ButtonFindMore = styled(Button)({
  backgroundColor: "gray",
  textTransform: "none",
  fontSize: 22,
  paddingLeft: 40,
  paddingRight: 40,
  ":hover": {
    backgroundColor: "darkgray",
  },
});
