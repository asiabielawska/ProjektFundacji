import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const Image = styled("img")({
  cursor: "pointer",
});

export const NavigationLink = styled(NavLink)({
  margin: 15,
  color: "#5e503f",
  textDecoration: "none",
});

export const MainHeading = styled("h1")({
  paddingTop: 130,
  paddingLeft: 100,
  color: "#5e503f",
  fontSize: 40,
});

export const Footer = styled("footer")({
  backgroundColor: "#EAE0D5",
  height: 100,
  paddingLeft: 20,
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  color: "#5E503F",
});

export const FooterHeading = styled("div")({
  fontSize: 15,
  paddingTop: 10,
});

export const FooterMail = styled("div")({
  fontSize: 12,
  paddingTop: 5,
});

export const FooterPhone = styled("div")({
  fontSize: 12,
});

export const FooterK = styled("div")({
  fontSize: 15,
});
