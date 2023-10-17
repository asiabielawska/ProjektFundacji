import {
  ClosingButton,
  ZoomedImg,
  ZoomedImgBackground,
  ZoomedImgContainer,
} from "./styled";

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
          <ZoomedImgBackground></ZoomedImgBackground>
          <ZoomedImg src={selectedImage}></ZoomedImg>
          <ClosingButton
            variant="contained"
            onClick={() => setSelectedImage("")}
          >
            X
          </ClosingButton>
        </ZoomedImgContainer>
      </>
    )
  );
};
