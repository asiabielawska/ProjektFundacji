import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import img from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  FooterHeading,
  FooterK,
  FooterMail,
  FooterPhone,
  Image,
  NavigationLink,
  FbIcon,
  FooterAdres,
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
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <Image
              src={img}
              width={"80px"}
              alt="logo"
              onClick={() => navigate("/")}
            />
          </Typography>
          <NavigationLink to={"/o-fundacji"}>O Fundacji</NavigationLink>
          <NavigationLink to={"/historia"}>Historia</NavigationLink>
          <NavigationLink to={"/oferta"}>Oferta</NavigationLink>
          <NavigationLink to={"/galeria"}>Galeria</NavigationLink>
          <NavigationLink to={"/kontakt"}>Kontakt</NavigationLink>
        </Toolbar>
      </AppBar>

      <main>{children}</main>

      {!isMainPage && (
        <Footer>
          <FooterHeading>Fundacja Młyn Zyzaków</FooterHeading>
          <FooterAdres>ul. Sienkiewicza 89, 34-300 Żywiec</FooterAdres>
          <FooterMail>e-mail: FundacjaMlynZyzakow@gmail.com</FooterMail>
          <FooterPhone>Telefon: 695 832 759</FooterPhone>
          <FooterK>KRS: 0000944872</FooterK>
          <FbIcon
            href="https://www.facebook.com/profile.php?id=100090282412225"
            target="blank"
          >
            <FacebookIcon fontSize="large" />
          </FbIcon>
        </Footer>
      )}
    </>
  );
}
