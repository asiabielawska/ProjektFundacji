import { Button, ImageList, ImageListItem, styled } from "@mui/material";

export const ImagesOfGallery = styled(ImageList)((props) => ({
  paddingLeft: 100,
  paddingRight: 100,
  paddingBottom: 50,
  [props.theme.breakpoints.down(700)]: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: 20,
  },
}));

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

export const ZoomedImg = styled("img")((props) => ({
  width: "48%",
  zIndex: 100,
  [props.theme.breakpoints.down(1003)]: {
    width: "60%",
  },
  [props.theme.breakpoints.down(700)]: {
    width: "90%",
  },
}));

export const ClosingButton = styled(Button)((props) => ({
  position: "absolute",
  backgroundColor: "gray",
  top: 0,
  right: 0,
  transform: "translate(-200%, 235%)",
  ":hover": {
    backgroundColor: "darkgray",
  },
  [props.theme.breakpoints.down(700)]: {
    transform: "translate(-40%, 300%)",
    top: 0,
    right: 0,
    zIndex: 111,
  },
  [props.theme.breakpoints.down(500)]: {
    transform: "translate(-24%, 475%)",
    top: 0,
    right: 0,
    zIndex: 111,
  },
}));
