import { styled } from "@mui/material";

export const ContactContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 100px 100px 100px",
});

export const ContactAllText = styled("div")({
  color: "#5E503F",
  width: "40%",
  fontSize: 25,
  flex: 2,
});

export const ContactElement = styled("div")({
  borderBottom: "1px solid #5E503F",
  paddingTop: 30,
});

export const ContactImg = styled("img")({
  width: "50%",
  height: "80%",
  borderRadius: 47,
  flex: 1,
});
