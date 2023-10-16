import { Button, ImageList, styled } from "@mui/material";

export const ImagesOfGalerry = styled(ImageList)({
  paddingLeft: 100,
  paddingRight: 100,
});

export const ZoomedImgContainer = styled("div")({});

export const ZoomedImg = styled("img")({
  marginTop: "-40%",
  position: "absolute",
  marginLeft: "30%",
  width: "48%",
});

export const ClosingButton = styled(Button)({
  position: "absolute",
  cursor: "pointer",
  right: "20%",
  backgroundColor: "gray",
  top: 240,
});
