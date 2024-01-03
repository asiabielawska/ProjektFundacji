import { ZoomedImg, ZoomedImgBackground, ZoomedImgContainer } from "./styled";

type Props = {
  selectedImage: string;
  setSelectedImage: (value: React.SetStateAction<string>) => void;
};

export const ImageAboveOthers = ({
  selectedImage,
  setSelectedImage,
}: Props) => {
  return (
    selectedImage && (
      <>
        <ZoomedImgContainer>
          <ZoomedImgBackground
            onClick={() => setSelectedImage("")}
          ></ZoomedImgBackground>
          <ZoomedImg src={selectedImage}></ZoomedImg>
        </ZoomedImgContainer>
      </>
    )
  );
};
