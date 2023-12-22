import { styled } from "@mui/material";

export const Container = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",

  paddingBottom: "10vh",
  justifyContent: "space-evenly",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
  },
}));

export const Text = styled("span")((props) => ({
  borderRadius: 47,
  color: "#5E503F",
  paddingRight: 40,
  fontSize: 20,
  width: "40%",
  textAlign: "justify",
  [props.theme.breakpoints.down(1003)]: {
    width: "95%",
    fontSize: 15,
    paddingRight: 0,
  },
}));

export const Img = styled("img")((props) => ({
  width: "30%",
  height: "80%",
  borderRadius: 47,
  [props.theme.breakpoints.down(1003)]: {
    width: "40%",
    marginTop: 10,
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
