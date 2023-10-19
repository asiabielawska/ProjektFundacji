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
  FacebookLink,
  FooterKrs,
  AllNavigationBar,
  FooterLeft,
  ContentOfPage,
} from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LaptopNavigationBar } from "./LaptopNavigationBar";
import { MobileNavigationBar } from "./MobileNavigationBar";

type Props = {
  children: React.ReactNode;
  isMainPage?: boolean;
};

export function Layout({ children, isMainPage }: Props) {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width:800px)");

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
            <LaptopNavigationBar isMainPage={isMainPage} />
          ) : (
            <MobileNavigationBar />
          )}
        </AllNavigationBar>
      </AppBar>

      <ContentOfPage>{children}</ContentOfPage>

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
