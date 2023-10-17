import { MainHeading } from "../Layout/styled";
import ImgOfMlyn from "../../assets/młynmain.jpeg";
import ImgOfMlyn2 from "../../assets/młynmain2.jpg";
import { ImageOfGallery, ImagesOfGallery } from "./styled";
import { useState } from "react";
import { ImageAboveOthers } from "./ImageAboveOthers";

const itemData = [
  { img: ImgOfMlyn, title: "mlyn", id: 1 },
  { img: ImgOfMlyn2, title: "mlyn", id: 2 },
  { img: ImgOfMlyn2, title: "mlyn", id: 3 },
  { img: ImgOfMlyn, title: "mlyn", id: 4 },
  { img: ImgOfMlyn, title: "mlyn", id: 5 },
  { img: ImgOfMlyn2, title: "mlyn", id: 6 },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <MainHeading>Galeria</MainHeading>
      <ImagesOfGallery variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageOfGallery key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              onClick={() => setSelectedImage(item.img)}
            />
          </ImageOfGallery>
        ))}
      </ImagesOfGallery>
      <ImageAboveOthers
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
};
