import { ImageList, ImageListItem, styled } from "@mui/material";

export const ImagesOfGallery = styled(ImageList)((props) => ({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingBottom: 50,
  paddingTop: 30,
  marginTop: 100,
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

export const ZoomedImg = styled("img")({
  zIndex: 100,
  maxHeight: "90vh",
  maxWidth: "80vw",
});
