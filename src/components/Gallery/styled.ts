import { Button, ImageList, ImageListItem, styled } from "@mui/material";

export const ImagesOfGallery = styled(ImageList)({
  paddingLeft: 100,
  paddingRight: 100,
  paddingBottom: 50,
});

export const ImageOfGallery = styled(ImageListItem)({
  cursor: "pointer",
});

export const ZoomedImgContainer = styled("div")({
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 15,
});

export const ZoomedImgBackground = styled("div")({
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  left: 0,
  backgroundColor: "grey",
  opacity: 0.6,
});

export const ZoomedImg = styled("img")({
  width: "48%",
  zIndex: 100,
});

export const ClosingButton = styled(Button)({
  position: "absolute",
  backgroundColor: "gray",
  top: 0,
  right: 0,
  transform: "translate(-200%, 235%)",
  ":hover": {
    backgroundColor: "darkgray",
  },
});
