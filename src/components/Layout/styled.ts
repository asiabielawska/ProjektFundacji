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
  height: 105,
  paddingLeft: 20,
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  color: "#5E503F",
});

export const FooterHeading = styled("div")({
  fontSize: 17,
  paddingTop: 7,
  fontWeight: "bold",
});

export const FooterAdres = styled("div")({
  fontSize: 14,
  paddingTop: 6,
});

export const FooterMail = styled("div")({
  fontSize: 14,
});

export const FooterPhone = styled("div")({
  fontSize: 14,
});

export const FooterK = styled("span")({
  fontSize: 18,
  fontWeight: "bold",
  position: "absolute",
  left: "43%",
  bottom: "35%",
});

export const FacebookLink = styled("a")({
  position: "absolute",
  right: 30,
  bottom: 15,
  color: "#5E503F",
});
