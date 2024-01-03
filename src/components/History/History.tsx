import {
  Container,
  ImgContainer,
  ImgOne,
  ImgThree,
  ImgTwo,
  Text,
  TextContainer,
  SecondaryHeading,
  Heading,
} from "./styled";
import Img1 from "../../assets/image00001.jpeg";
import Img3 from "../../assets/image00003.jpeg";
import Img25 from "../../assets/image00025.jpeg";

export const History = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Heading>Krótka historia Młyna</Heading>
          <SecondaryHeading>Młyn kiedyś</SecondaryHeading>
          <Text>
            Młyn z 1827 r. zlokalizowany na ul. Sienkiewicza 89 w Żywcu, został
            wybudowany przez Franciszka Augustina. Młyn od 1828 r. należy
            nieprzerwanie do 7 pokoleń rodziny Zyzaków. Obiekt jest nieczynny od
            1998 r.
          </Text>
          <Text>
            Młyn jest z zewnątrz murowany, a od wewnątrz drewniany. Z początku
            był jedynie młynem wodnym, a od 1956 r. był już elektryczny w
            związku z zasypaniem Młynówki, której pozostałość do dzisiaj płynie
            przez Żywiecki Park wpadając do rzeki Soły. Młyn był pierwszym
            budynkiem przed wejściem do centrum Żywca, gdzie ludzie z
            okolicznych wsi przychodzili boso i oczyszczali stopy w płynącej
            przy nim Młynówce, aby móc wejść do miasta w butach.
          </Text>
          <SecondaryHeading>Młyn dzisiaj</SecondaryHeading>
          <Text>
            Obecnie Młyn należy do Aleksandry Bielawskiej, z rodziny Zyzaków.
            Planowane jest otwarcie skansenu umożliwiającego zachowanie dawnego
            klimatu i wyjątkowego wyglądu.
          </Text>
        </TextContainer>
        <ImgContainer>
          <ImgOne src={Img25}></ImgOne>
          <ImgTwo src={Img1}></ImgTwo>
          <ImgThree src={Img3}></ImgThree>
        </ImgContainer>
      </Container>
    </>
  );
};
