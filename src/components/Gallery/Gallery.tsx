import { MainHeading } from "../Layout/styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";
import ImgOfMlyn2 from "../../assets/młynmain2.jpg";
import {
  ClosingButton,
  ImageOfGallery,
  ImagesOfGalerry,
  ZoomedImg,
  ZoomedImgBackground,
  ZoomedImgContainer,
} from "./styled";
import { useState } from "react";

const itemData = [
  { img: ImgOfMlyn, title: "mlyn", id: 1 },
  { img: ImgOfMlyn2, title: "mlyn", id: 2 },
  { img: ImgOfMlyn2, title: "mlyn", id: 3 },
  { img: ImgOfMlyn, title: "mlyn", id: 4 },
  { img: ImgOfMlyn, title: "mlyn", id: 5 },
  { img: ImgOfMlyn2, title: "mlyn", id: 6 },
];

export const Gallery = () => {
  const [clicked, setClicked] = useState("");

  return (
    <>
      <MainHeading>Galeria</MainHeading>
      <ImagesOfGalerry variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageOfGallery key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              onClick={() => setClicked(item.img)}
            />
          </ImageOfGallery>
        ))}
      </ImagesOfGalerry>
      {clicked && (
        <ZoomedImgContainer>
          <ZoomedImgBackground></ZoomedImgBackground>
          <ZoomedImg src={clicked}></ZoomedImg>
          <ClosingButton variant="contained" onClick={() => setClicked("")}>
            X
          </ClosingButton>
        </ZoomedImgContainer>
      )}
    </>
  );
};
