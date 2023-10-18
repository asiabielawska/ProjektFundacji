import { styled } from "@mui/material";

export const HistoryContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  paddingLeft: 100,
});

export const HistoryTextContainer = styled("div")({
  color: "#5E503F",
  flex: 1,
});

export const SecondaryHeading = styled("h3")({
  color: "#312a21",
});

export const HistoryText = styled("div")({
  fontSize: 17,
  paddingBottom: 15,
});

export const HistoryImgContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-around",
  paddingLeft: 100,
});

export const HistoryImgOne = styled("img")({
  height: "40%",
  width: "50%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, 30px)",
});

export const HistoryImgTwo = styled("img")({
  height: "40%",
  width: "50%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(130px, 0)",
  zIndex: 1,
});

export const HistoryImgThree = styled("img")({
  height: "40%",
  width: "50%",
  borderRadius: 47,
  paddingBottom: 10,
  transform: "translate(0px, -30px)",
});
