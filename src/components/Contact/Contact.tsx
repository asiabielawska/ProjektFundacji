import { MainHeading } from "../Layout/styled";
import Img4 from "../../assets/image00004.jpeg";
import { Container, Img, AllText, Element, All } from "./styled";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "@mui/material";

export const Contact = () => {
  const position = [49.69791308628224, 19.202050445650396] as [number, number];
  const isMapFullView = useMediaQuery("(max-width:1003px)");
  return (
    <>
      <MainHeading>Zapraszamy do kontaktu!</MainHeading>
      <All>
        <Container>
          <AllText>
            <Element>Adres: ul. Sienkiewicza 89, 34-300 Żywiec</Element>
            <Element>e-mail: FundacjaMlynZyzakow@gmail.com</Element>
            <Element>Telefon: 695 832 759</Element>
            <br />
            <br />
          </AllText>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={
              isMapFullView
                ? { width: "90vw", height: "50vh", zIndex: 0 }
                : { width: "50vw", height: "50vh", zIndex: 0 }
            }
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </Container>
        <Img src={Img4}></Img>
      </All>
    </>
  );
};
