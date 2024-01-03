import { styled } from "@mui/material";

export const Container = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: "10vh",
  justifyContent: "space-between",
  marginTop: "20vh",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
    paddingLeft: 0,
    marginTop: "18vh",
  },
}));

export const Text = styled("span")((props) => ({
  borderRadius: 47,
  color: "#5E503F",
  paddingLeft: "5vw",
  fontSize: 22,
  width: "50%",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    width: "95%",
    fontSize: 18,
    marginRight: "5vw",
  },
}));

export const Img = styled("img")((props) => ({
  width: "30%",
  height: "80%",
  borderRadius: 47,
  marginRight: "5vw",
  [props.theme.breakpoints.down(1003)]: {
    width: "40%",
    marginTop: 30,
    marginRight: 0,
  },
  [props.theme.breakpoints.down(620)]: {
    width: "100%",
    marginTop: 10,
    borderRadius: 0,
  },
}));

export const Statute = styled("a")({
  color: "#5E503F",
  fontSize: 22,
});
