import { ImageOfGallery, ImagesOfGallery } from "./styled";
import { useState } from "react";
import { ImageAboveOthers } from "./ImageAboveOthers";
import { itemData } from "./images";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
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
