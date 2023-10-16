import { MainHeading } from "../Layout/styled";
import { ImageListItem } from "@mui/material";
import ImgOfMlyn from "../../assets/młynmain.jpeg";
import ImgOfMlyn2 from "../../assets/młynmain2.jpg";
import {
  ClosingButton,
  ImagesOfGalerry,
  ZoomedImg,
  ZoomedImgContainer,
} from "./styled";
import { useState } from "react";

const itemData = [
  { img: ImgOfMlyn, title: "mlyn" },
  { img: ImgOfMlyn2, title: "mlyn" },
  { img: ImgOfMlyn2, title: "mlyn" },
  { img: ImgOfMlyn, title: "mlyn" },
  { img: ImgOfMlyn, title: "mlyn" },
  { img: ImgOfMlyn2, title: "mlyn" },
];

export const Gallery = () => {
  const [clicked, setClicked] = useState("");

  return (
    <>
      <MainHeading>Galeria</MainHeading>
      <ImagesOfGalerry variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              onClick={() => setClicked(item.img)}
            />
          </ImageListItem>
        ))}
      </ImagesOfGalerry>
      {clicked && (
        <ZoomedImgContainer>
          <ZoomedImg src={clicked}></ZoomedImg>
          <ClosingButton variant="contained" onClick={() => setClicked("")}>
            X
          </ClosingButton>
        </ZoomedImgContainer>
      )}
    </>
  );
};
