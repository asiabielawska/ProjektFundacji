import { Heading } from "./styled";
import Img4 from "../../assets/img9.jpg";
import { TextAndMap, Img, Text, SingleText, Content } from "./styled";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "@mui/material";

export const Contact = () => {
  const position = [49.69791308628224, 19.202050445650396] as [number, number];
  const isMapFullView = useMediaQuery("(max-width:1003px)");
  return (
    <>
      <Heading>Skontaktuj się z nami!</Heading>
      <Content>
        <TextAndMap>
          <Text>
            <SingleText>Telefon: 695 832 759</SingleText>
            <SingleText>e-mail: FundacjaMlynZyzakow@gmail.com</SingleText>
            <SingleText>Adres: ul. Sienkiewicza 89, 34-300 Żywiec</SingleText>
          </Text>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={
              isMapFullView
                ? { width: "90vw", height: "50vh", zIndex: 0 }
                : { width: "55vw", height: "50vh", zIndex: 0 }
            }
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </TextAndMap>
        <Img src={Img4}></Img>
      </Content>
    </>
  );
};
