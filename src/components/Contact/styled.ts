import { styled } from "@mui/material";

export const ContactContainer = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 100px 100px 100px",
  [props.theme.breakpoints.down(1003)]: {
    flexDirection: "column",
    padding: "5%",
  },
}));

export const ContactAllText = styled("div")((props) => ({
  color: "#5E503F",
  width: "40%",
  fontSize: 25,
  flex: 2,
  [props.theme.breakpoints.down(1003)]: {
    width: "100%",
    marginBottom: 20,
  },
  [props.theme.breakpoints.down(390)]: {
    fontSize: 17,
  },
}));

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
