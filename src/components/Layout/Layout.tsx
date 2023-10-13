import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import img from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  FooterHeading,
  FooterMail,
  FooterPhone,
  Image,
  NavigationLink,
  FacebookLink,
  FooterKrs,
  AllLinks,
  AllNavigationBar,
  FooterLeft,
} from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {
  children: React.ReactNode;
  isMainPage?: boolean;
};

export function Layout({ children, isMainPage }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        component={"nav"}
        style={{
          background: "none",
          borderBottomColor: "#5E503F",
          boxShadow: "none",
        }}
      >
        <AllNavigationBar isMainPage={isMainPage}>
          <Typography sx={{ flexGrow: 1 }}>
            <Image
              src={img}
              width={"80px"}
              alt="logo"
              onClick={() => navigate("/")}
            />
          </Typography>
          <AllLinks isMainPage={isMainPage}>
            <NavigationLink to={"/o-fundacji"}>O fundacji</NavigationLink>
            <NavigationLink to={"/historia"}>Historia</NavigationLink>
            <NavigationLink to={"/oferta"}>Oferta</NavigationLink>
            <NavigationLink to={"/galeria"}>Galeria</NavigationLink>
            <NavigationLink to={"/kontakt"}>Kontakt</NavigationLink>
          </AllLinks>
        </AllNavigationBar>
      </AppBar>

      <main>{children}</main>

      {!isMainPage && (
        <Footer>
          <FooterLeft>
            <FooterHeading>Fundacja Młyn Zyzaków</FooterHeading>
            <FooterMail>e-mail: FundacjaMlynZyzakow@gmail.com</FooterMail>
            <FooterPhone>Telefon: 695 832 759</FooterPhone>
            <FooterKrs>KRS: 0000944872</FooterKrs>
          </FooterLeft>

          <FacebookLink
            href="https://www.facebook.com/profile.php?id=100090282412225"
            target="blank"
          >
            <FacebookIcon fontSize="large" />
          </FacebookLink>
        </Footer>
      )}
    </>
  );
}
