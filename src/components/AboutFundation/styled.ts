import { styled } from "@mui/material";

export const AboutFundationContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "5vh",
});

export const TextWithBackground = styled("span")({
  backgroundColor: "#5E503F",
  borderRadius: 47,
  color: "white",
  padding: 20,
  transform: "translate(55px, 0)",
  width: "40%",
});

export const AboutFundationImg = styled("img")({
  width: "50%",
  height: "80%",
  borderRadius: 47,
});
