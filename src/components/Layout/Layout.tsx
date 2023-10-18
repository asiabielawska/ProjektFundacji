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
  NavigationMenu,
  MenuButton,
} from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";

type Props = {
  children: React.ReactNode;
  isMainPage?: boolean;
};

export function Layout({ children, isMainPage }: Props) {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar
        component={"nav"}
        style={{
          background: "none",
          borderBottomColor: "#5E503F",
          boxShadow: "none",
          zIndex: 10,
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
          {isLargeScreen ? (
            <AllLinks isMainPage={isMainPage}>
              <NavigationLink to={"/o-fundacji"}>O fundacji</NavigationLink>
              <NavigationLink to={"/historia"}>Historia</NavigationLink>
              <NavigationLink to={"/oferta"}>Oferta</NavigationLink>
              <NavigationLink to={"/galeria"}>Galeria</NavigationLink>
              <NavigationLink to={"/kontakt"}>Kontakt</NavigationLink>
            </AllLinks>
          ) : (
            <div>
              <IconButton onClick={() => setOpen(true)}>
                <MenuButton isMainPage={isMainPage} />
              </IconButton>
              <NavigationMenu
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
              >
                <NavigationLink
                  to={"/o-fundacji"}
                  onClick={() => setOpen(false)}
                >
                  O fundacji
                </NavigationLink>
                <NavigationLink to={"/historia"} onClick={() => setOpen(false)}>
                  Historia
                </NavigationLink>
                <NavigationLink to={"/oferta"} onClick={() => setOpen(false)}>
                  Oferta
                </NavigationLink>
                <NavigationLink to={"/galeria"} onClick={() => setOpen(false)}>
                  Galeria
                </NavigationLink>
                <NavigationLink to={"/kontakt"} onClick={() => setOpen(false)}>
                  Kontakt
                </NavigationLink>
              </NavigationMenu>
            </div>
          )}
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
