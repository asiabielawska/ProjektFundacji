import { Drawer, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const AllNavigationBar = styled(Toolbar, {
  shouldForwardProp: (propName) => propName !== "isMainPage",
})<{ isMainPage?: boolean }>((props) => ({
  backgroundColor: props.isMainPage ? "none" : "white",
  borderBottom: props.isMainPage ? "none" : "1px solid #5e503f",
}));

export const NavigationMenu = styled(Drawer)({
  a: {
    color: "#5e503f",
    borderBottom: "3px solid #5e503f",
  },
});

export const MenuButton = styled(MenuIcon, {
  shouldForwardProp: (propName) => propName !== "isMainPage",
})<{ isMainPage?: boolean }>((props) => ({
  color: props.isMainPage ? "white" : "#5e503f",
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
  ":hover": {
    textDecoration: "underline",
  },
});

export const ContentOfPage = styled("main")({
  minHeight: "calc(100vh - 110px)",
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

export const FooterMail = styled("div")((props) => ({
  fontSize: 14,
  paddingTop: 8,
  [props.theme.breakpoints.down(306)]: {
    fontSize: 12,
  },
}));

export const FooterPhone = styled("div")((props) => ({
  fontSize: 14,
  [props.theme.breakpoints.down(306)]: {
    fontSize: 12,
  },
}));

export const FooterKrs = styled("div")({
  fontSize: 16,
  fontWeight: "bold",
  paddingTop: 5,
});

export const FacebookLink = styled("a")((props) => ({
  color: "#5E503F",
  paddingTop: 50,
  [props.theme.breakpoints.down(306)]: {
    paddingTop: 0,
  },
}));
