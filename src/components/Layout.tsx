import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import img from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
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
            <img
              src={img}
              width={"80px"}
              alt="logo"
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
              }}
            />
          </Typography>
          <Link to={"/o-fundacji"} className="nav-link">
            O Fundacji
          </Link>
          <Link to={"/historia"} className="nav-link">
            Historia
          </Link>
          <Link to={"/oferta"} className="nav-link">
            Oferta
          </Link>
          <Link to={"/galeria"} className="nav-link">
            Galeria
          </Link>
          <Link to={"/kontakt"} className="nav-link">
            Kontakt
          </Link>
        </Toolbar>
      </AppBar>

      <div>{children}</div>

      <footer
        style={{
          backgroundColor: "#EAE0D5",
          height: 100,
          paddingLeft: 20,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          color: "#5E503F",
        }}
      >
        <div style={{ fontSize: 15, paddingTop: 10 }}>
          Fundacja Młyn Zyzaków
        </div>
        <div style={{ fontSize: 12, paddingTop: 5 }}>
          Adres e-mail: FundacjaMlynZyzakow@gmail.com
        </div>
        <div style={{ fontSize: 12 }}>Telefon: 695 832 759</div>
        <div style={{ fontSize: 15 }}>KRS: 0000944872</div>
      </footer>
    </>
  );
}
