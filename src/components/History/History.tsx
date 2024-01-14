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
          <Heading>Krótka historia Młyna Zyzaków</Heading>
          <SecondaryHeading>Młyn kiedyś</SecondaryHeading>
          <Text>
            Młyn z 1827 r. zlokalizowany przy ul. Sienkiewicza 89 w Żywcu został
            wybudowany przez księdza Franciszka Augustina dla jego siostry
            Apolonii Selarin. Po około pięćdziesięciu latach od momentu
            wybudowania odkupiła go rodzina Zyzaków i od tamtego czasu
            nieprzerwanie należy do siódmego już pokolenia tej rodziny. Obiekt
            jest nieczynny od 1998 r.
          </Text>
          <Text>
            Z zewnątrz młyn jest murowany, a od wewnątrz drewniany. Pierwotnie
            był jedynie młynem wodnym, a od 1956 r. już elektrycznym w związku z
            zasypaniem Młynówki, której pozostałość do dzisiaj płynie przez
            żywiecki park, wpadając do rzeki Soły. Młyn był pierwszym budynkiem
            przed wejściem do centrum Żywca, gdzie ludzie z okolicznych wsi,
            przychodząc boso, oczyszczali stopy w płynącej przy nim Młynówce,
            aby móc założyć buty i wejść do miasta.
          </Text>
          <SecondaryHeading>Młyn dzisiaj</SecondaryHeading>
          <Text>
            Obecnie młyn należy do Aleksandry Bielawskiej z rodziny Zyzaków.
            Planowane jest otwarcie w nim skansenu, co umożliwi zachowanie
            dawnego klimatu i wyjątkowego wyglądu obiektu. W grudniu 2023 r.
            Młyn trafił na listę zabytków i od tego czasu znajduje się pod stałą
            opieką konserwatorską.
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
