import { Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const AllNavigationBar = styled(Toolbar, {
  shouldForwardProp: (propName) => propName !== "isMainPage",
})<{ isMainPage?: boolean }>((props) => ({
  backgroundColor: props.isMainPage ? "none" : "white",
  borderBottom: props.isMainPage ? "none" : "1px solid #5e503f",
}));

export const Image = styled("img")({
  cursor: "pointer",
});

export const AllLinks = styled("div")<{ isMainPage?: boolean }>((props) => ({
  a: {
    color: props.isMainPage ? "white" : "#5e503f",
  },
}));

export const NavigationLink = styled(NavLink)({
  margin: 25,
  textDecoration: "none",
  fontSize: 25,
});

export const MainHeading = styled("h1")({
  paddingTop: 130,
  paddingLeft: 100,
  color: "#5e503f",
  fontSize: 40,
  margin: 0,
});

export const Footer = styled("footer")({
  backgroundColor: "#EAE0D5",
  height: 110,
  paddingLeft: 20,
  color: "#5E503F",
  display: "flex",
});

export const FooterLeft = styled("div")({
  width: "95%",
});

export const FooterHeading = styled("div")({
  fontSize: 17,
  paddingTop: 8,
  fontWeight: "bold",
  color: "#312a21",
});

export const FooterMail = styled("div")({
  fontSize: 14,
  paddingTop: 8,
});

export const FooterPhone = styled("div")({
  fontSize: 14,
});

export const FooterKrs = styled("div")({
  fontSize: 16,
  fontWeight: "bold",
  paddingTop: 5,
});

export const FacebookLink = styled("a")({
  color: "#5E503F",
  paddingTop: 50,
});
